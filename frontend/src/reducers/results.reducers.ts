import { ResultActionTypes, ResultAction, ResponseItem } from 'types/results.types';
import { SearchActionTypes, SearchAction } from 'types/search.types';

const searchResultsReducer = (state: ResponseItem[] = [], action: ResultAction | SearchAction) => {
  switch (action.type) {
    case ResultActionTypes.CLEAR_SEARCH_RESULTS:
    case SearchActionTypes.CLEAR_SEARCH_QUERY:
      return [];
    case ResultActionTypes.UPDATE_SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export { searchResultsReducer };
