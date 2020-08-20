import { SearchQuery, SearchAction, SearchActionTypes } from 'types/search.types';

const defaultSearchQuery = {
  query: '',
  entity: 'users',
  isFetching: false,
};

export const searchReducer = (state: SearchQuery = defaultSearchQuery, action: SearchAction) => {
  switch (action.type) {
    case SearchActionTypes.REQUEST_SEARCH:
      return { ...action.payload, isFetching: action.isFetching };
    case SearchActionTypes.RECEIVE_SEARCH:
      return { ...state, isFetching: action.isFetching };
    case SearchActionTypes.RESET_SEARCH:
      return { ...state, query: '' };
    default:
      return state;
  }
};
