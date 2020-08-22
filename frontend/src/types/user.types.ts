export enum UserActionTypes {
  RECEIVE_USERS = 'RECEIVE_USERS',
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

export type UserAction = ReceiveUsersAction;
