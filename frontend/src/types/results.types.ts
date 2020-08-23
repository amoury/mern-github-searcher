export enum ResultActionTypes {
  CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS',
  UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS',
}

export enum ResponseItemType {
  'Repository',
  'User',
}

export interface ResponseItem {
  id: number;
  login?: string;
  type: ResponseItemType;
  avatar_url?: string;
  name?: string;
  html_url: string;
  stats: object[];
  meta: string[];
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
