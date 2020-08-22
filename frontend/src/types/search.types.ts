export enum SearchActionTypes {
  UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY',
  CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY',

  REQUEST_SEARCH = 'REQUEST_SEARCH',
  RECEIVE_SEARCH = 'RECEIVE_SEARCH',
  RESET_SEARCH = 'RESET_SEARCH',
  SET_SEARCH = 'SET_SEARCH',
  RESET_CURRENT_STATE = 'RESET_CURRENT_STATE',
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

// export interface RequestSearchAction {
//   type: SearchActionTypes.REQUEST_SEARCH;
//   payload: SearchQuery;
//   isFetching: boolean;
// }

// export interface ReceiveSearchAction {
//   type: SearchActionTypes.RECEIVE_SEARCH;
//   isFetching: boolean;
// }

// export interface ResetSearchAction {
//   type: SearchActionTypes.RESET_SEARCH;
// }

// export interface ResetCurrentState {
//   type: SearchActionTypes.RESET_CURRENT_STATE;
// }

// export interface SetSearchAction {
//   type: SearchActionTypes.SET_SEARCH;
//   payload: SearchQuery;
// }

export type SearchAction = UpdateSearchQueryAction | ClearSearchQueryAction;
// | RequestSearchAction
// | ReceiveSearchAction
// | ResetSearchAction
// | ResetCurrentState
// | SetSearchAction;
