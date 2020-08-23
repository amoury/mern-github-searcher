export enum SearchActionTypes {
  UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY',
  CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY',
}

export interface SearchQuery {
  entity: string;
  query: string;
}

export interface UpdateSearchQueryAction {
  type: SearchActionTypes.UPDATE_SEARCH_QUERY;
  payload: SearchQuery;
}

export interface ClearSearchQueryAction {
  type: SearchActionTypes.CLEAR_SEARCH_QUERY;
}

export type SearchAction = UpdateSearchQueryAction | ClearSearchQueryAction;
