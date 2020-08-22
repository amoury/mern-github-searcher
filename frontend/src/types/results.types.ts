export enum ResultActionTypes {
  CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS',
  UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS',
}

export enum ResponseItemType {
  'Repository',
  'User',
}

export interface ResponseItem {
  login: number;
  type: ResponseItemType;
}

export interface SearchResponse {
  items: ResponseItem[];
}

export interface ClearSearchResultsAction {
  type: ResultActionTypes.CLEAR_SEARCH_RESULTS;
}

export interface UpdateSearchResults {
  type: ResultActionTypes.UPDATE_SEARCH_RESULTS;
  payload: ResponseItem[];
}

export type ResultAction = ClearSearchResultsAction | UpdateSearchResults;
