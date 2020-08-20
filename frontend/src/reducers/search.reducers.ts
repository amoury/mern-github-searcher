import {
  SearchQuery,
  RequestSearchAction,
  ReceiveSearchAction,
  SearchActionTypes,
} from 'types/search.types';

const defaultSearchQuery = {
  query: '',
  entity: 'users',
  isFetching: false,
};

export const searchReducer = (
  state: SearchQuery = defaultSearchQuery,
  action: RequestSearchAction | ReceiveSearchAction
) => {
  switch (action.type) {
    case SearchActionTypes.REQUEST_SEARCH:
      return { ...action.payload, isFetching: action.isFetching };
    case SearchActionTypes.RECEIVE_SEARCH:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
