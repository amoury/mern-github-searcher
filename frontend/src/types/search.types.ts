export enum SearchActionTypes {
  REQUEST_SEARCH = 'REQUEST_SEARCH',
  RECEIVE_SEARCH = 'RECEIVE_SEARCH',
}

export enum UserActionTypes {
  FETCH_USERS,
}

export interface SearchQuery {
  entity: string;
  query: string;
}

export interface RequestSearchAction {
  type: SearchActionTypes.REQUEST_SEARCH;
  payload: SearchQuery;
  isFetching: boolean;
}

export interface ReceiveSearchAction {
  type: SearchActionTypes.RECEIVE_SEARCH;
  isFetching: boolean;
}
