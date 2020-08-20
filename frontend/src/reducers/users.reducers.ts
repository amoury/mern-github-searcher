import {
  User,
  ReceiveUsersAction,
  UserActionTypes,
  UsersBySearchTermState,
} from 'types/user.types';

export const usersReducer = (state: User[] = [], action: ReceiveUsersAction) => {
  switch (action.type) {
    case UserActionTypes.RECEIVE_USERS:
      return action.payload;
    default:
      return state;
  }
};

export const usersBySearchTermReducer = (
  state: UsersBySearchTermState = {},
  action: ReceiveUsersAction
) => {
  switch (action.type) {
    case UserActionTypes.RECEIVE_USERS:
      return { ...state, [action.searchTerm]: action.payload };

    default:
      return state;
  }
};
