import axios from 'axios';
import _get from 'lodash/get';
import { Dispatch } from 'redux';
import {
  SearchQuery,
  SearchActionTypes,
  UpdateSearchQueryAction,
  ClearSearchQueryAction,
} from 'types/search.types';
import { SearchResponse, UpdateSearchResults } from 'types/results.types';
import { UpdateCache } from 'types/cache.types';

import { clearSearchResults, updateSearchResults } from 'actions/results.actions';
import { updateStatus } from 'actions/status.actions';
import { updateCache } from 'actions/cache.actions';
import { StoreState } from 'reducers';
import { UpdateStatusAction } from 'types/status.types';

export const updateSearchQuery = (searchQuery: SearchQuery): UpdateSearchQueryAction => ({
  type: SearchActionTypes.UPDATE_SEARCH_QUERY,
  payload: searchQuery,
});

export const clearSearchQuery = (): ClearSearchQueryAction => {
  return { type: SearchActionTypes.CLEAR_SEARCH_QUERY };
};

export const handleSearchQueryChange = (searchQuery: SearchQuery) => {
  return (dispatch: Dispatch, getState: Function) => {
    const store = getState();
    const { searchResults } = store;
    dispatch(updateSearchQuery(searchQuery));

    if (searchQuery.query.length < 3 && searchResults.length) {
      dispatch(clearSearchResults());
    }

    if (searchQuery.query.length >= 3) {
      handleSearch(searchQuery, dispatch, store);
    }
  };
};

const handleSearch = async (searchQuery: SearchQuery, dispatch: Dispatch, store: StoreState) => {
  const cacheKey = JSON.stringify(searchQuery);

  // 1. Change the app status to `isFetching:true`
  dispatch(updateStatus({ ...store.status, isFetching: true }));

  // 2. Check the cache for the results, if results exist, update the `searchResults` state;
  if (store.cache[cacheKey]) {
    dispatch<UpdateSearchResults>(updateSearchResults(store.cache[cacheKey]));
    dispatch<UpdateStatusAction>(
      updateStatus({ ...store.status, isFetching: false, success: true })
    );
    return;
  }

  // 3. If  no cache for given query, make api request to backend.
  try {
    const results = await axios.post<SearchResponse>('/api/search', { ...searchQuery });
    console.log('results ', results);
    dispatch<UpdateCache>(updateCache(cacheKey, results.data.items));
    dispatch<UpdateSearchResults>(updateSearchResults(results.data.items));
    dispatch<UpdateStatusAction>(
      updateStatus({ ...store.status, isFetching: false, success: true })
    );
  } catch (error) {
    const errors = _get(error, 'response.data.errors');
    dispatch<UpdateStatusAction>(updateStatus({ ...store.status, isFetching: false, errors }));
  }
};
