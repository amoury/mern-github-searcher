import {
  ResultActionTypes,
  ClearSearchResultsAction,
  UpdateSearchResults,
  ResponseItem,
} from 'types/results.types';

export const clearSearchResults = (): ClearSearchResultsAction => ({
  type: ResultActionTypes.CLEAR_SEARCH_RESULTS,
});

export const updateSearchResults = (results: ResponseItem[]): UpdateSearchResults => ({
  type: ResultActionTypes.UPDATE_SEARCH_RESULTS,
  payload: results,
});
