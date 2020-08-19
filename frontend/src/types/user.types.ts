export enum UserActionTypes {
  FETCH_USERS,
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

export interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
  payload: User[];
}
