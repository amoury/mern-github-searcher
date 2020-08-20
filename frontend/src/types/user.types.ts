export enum UserActionTypes {
  RECEIVE_USERS = 'RECEIVE_USERS',
  RESET_USERS = 'RESET_USERS',
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

export interface UsersBySearchTermState {
  [key: string]: User[];
}

export interface ReceiveUsersAction {
  type: UserActionTypes.RECEIVE_USERS;
  payload: User[];
  searchTerm: string;
}

export interface ResetUsersAction {
  type: UserActionTypes.RESET_USERS;
}

export type UserAction = ReceiveUsersAction | ResetUsersAction;
