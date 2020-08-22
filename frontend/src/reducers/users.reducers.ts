import { SearchActionTypes, SearchAction } from 'types/search.types';
import { User, UserActionTypes, UserAction, UsersBySearchTermState } from 'types/user.types';

export const usersReducer = (state: User[] = [], action: UserAction | SearchAction) => {
  switch (action.type) {
    case UserActionTypes.RECEIVE_USERS:
      return action.payload;
    case SearchActionTypes.RESET_CURRENT_STATE:
      return [];
    default:
      return state;
  }
};

export const usersBySearchTermReducer = (
  state: UsersBySearchTermState = {},
  action: UserAction
) => {
  switch (action.type) {
    case UserActionTypes.RECEIVE_USERS:
      return { ...state, [action.searchTerm]: action.payload };

    default:
      return state;
  }
};
