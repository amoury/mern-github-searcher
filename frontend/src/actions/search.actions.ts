import axios from 'axios';
import { Dispatch } from 'redux';
import {
  SearchQuery,
  SearchActionTypes,
  RequestSearchAction,
  ReceiveSearchAction,
} from 'types/search.types';

import { receiveUsers } from './user.actions';

export interface SearchResponse {
  total_count: number;
  items: any; // change this
}

export const requestSearch = (searchQuery: SearchQuery): RequestSearchAction => ({
  type: SearchActionTypes.REQUEST_SEARCH,
  payload: searchQuery,
  isFetching: true,
});

export const handleResponse = (
  results: SearchResponse,
  searchQuery: SearchQuery,
  dispatch: Dispatch
): void => {
  const { entity, query } = searchQuery;

  if (entity === 'users') {
    dispatch(receiveUsers(results.items, query));
  }

  // if (entity === 'repositories') {
  //   dispatch(receiveRepos(results));
  // }

  dispatch({ type: SearchActionTypes.RECEIVE_SEARCH, isFetching: false });
};

export const fetchSearchResults = (searchQuery: SearchQuery) => {
  const { entity, query } = searchQuery;

  return async (dispatch: Dispatch) => {
    dispatch(requestSearch(searchQuery));

    const response = await axios.get<SearchResponse>(
      `https://api.github.com/search/${entity}?q=${query}`
    );

    handleResponse(response.data, searchQuery, dispatch);
  };
};
