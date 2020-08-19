import { User, FetchUsersAction, UserActionTypes } from 'types/user.types';

export const usersReducer = (state: User[] = [], action: FetchUsersAction) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};
