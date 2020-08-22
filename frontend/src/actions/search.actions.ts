import axios from 'axios';
import { Dispatch } from 'redux';
import _get from 'lodash/get';
import {
  SearchQuery,
  SearchActionTypes,
  RequestSearchAction,
  ReceiveSearchAction,
} from 'types/search.types';

import { StoreState } from 'reducers/index';
import { receiveUsers } from './user.actions';
import { receiveRepos } from './repo.actions';

export interface SearchResponse {
  items: any;
}

export const requestSearch = (searchQuery: SearchQuery): RequestSearchAction => ({
  type: SearchActionTypes.REQUEST_SEARCH,
  payload: searchQuery,
  isFetching: true,
});

export const resetSearchTerm = () => ({
  type: SearchActionTypes.RESET_SEARCH,
});

export const handleResponse = (
  results: SearchResponse,
  searchQuery: SearchQuery,
  dispatch: Dispatch
): void => {
  const { entity, query } = searchQuery;

  if (entity === 'users') {
    dispatch(receiveUsers(results, query));
  }

  if (entity === 'repositories') {
    dispatch(receiveRepos(results, query));
  }

  dispatch<ReceiveSearchAction>({ type: SearchActionTypes.RECEIVE_SEARCH, isFetching: false });
};

export const fetchSearchResults = (searchQuery: SearchQuery) => {
  const { entity, query } = searchQuery;

  return async (dispatch: Dispatch, getState: Function) => {
    dispatch(requestSearch(searchQuery));

    const dataFromCache = getDataFromCache(getState(), searchQuery);

    if (dataFromCache.length) {
      return handleResponse(dataFromCache, searchQuery, dispatch);
    }

    try {
      const response = await axios.get<SearchResponse>(
        `https://api.github.com/search/${entity}?q=${query}`
      );
      handleResponse(response.data.items, searchQuery, dispatch);
    } catch (error) {
      // Do something with this error
      console.error('err ', error.message);
    }
  };
};

export const getDataFromCache = (state: StoreState, searchQuery: SearchQuery) => {
  const { entity, query } = searchQuery;
  const cache = { users: state.usersBySearchTerms, repositories: state.reposBySearchTerms };

  return _get(cache, [entity, query], []);
};

export const clearCurrentState = () => ({ type: SearchActionTypes.RESET_CURRENT_STATE });

export const clearSearch = () => {
  return (dispatch: Dispatch) => {
    dispatch(resetSearchTerm());
    dispatch(clearCurrentState());
  };
};
