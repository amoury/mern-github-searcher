export enum UserActionTypes {
  FETCH_USERS,
  SEARCH_USERS,
  SEARCH_REPOS,
  RECEIVE_USERS = 'RECEIVE_USERS',
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

export interface Repo {
  id: number;
  name: string;
  owner: User;
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
