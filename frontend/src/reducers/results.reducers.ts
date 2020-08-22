import { ResultActionTypes, ResultAction, ResponseItem } from 'types/results.types';

const searchResultsReducer = (state: ResponseItem[] = [], action: ResultAction) => {
  switch (action.type) {
    case ResultActionTypes.CLEAR_SEARCH_RESULTS:
      return [];
    case ResultActionTypes.UPDATE_SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export { searchResultsReducer };
