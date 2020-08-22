import { SearchQuery, SearchAction, SearchActionTypes } from 'types/search.types';

const defaultSearchQuery = {
  query: '',
  entity: 'users',
};

const searchQueryReducer = (state: SearchQuery = defaultSearchQuery, action: SearchAction) => {
  switch (action.type) {
    case SearchActionTypes.UPDATE_SEARCH_QUERY:
      return action.payload;
    case SearchActionTypes.CLEAR_SEARCH_QUERY:
      return { ...state, query: '' };
    default:
      return state;
  }
};

export { searchQueryReducer };
