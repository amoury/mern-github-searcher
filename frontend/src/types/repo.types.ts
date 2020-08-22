import { User } from './user.types';

export enum RepoActionTypes {
  RECEIVE_REPOS = 'RECEIVE_REPOS',
}

export interface Repo {
  id: number;
  name: string;
  owner: User;
  url: string;
}

export interface ReposBySearchTermState {
  [key: string]: Repo[];
}

export interface ReceiveReposAction {
  type: RepoActionTypes.RECEIVE_REPOS;
  payload: Repo[];
  searchTerm: string;
}

export type RepoAction = ReceiveReposAction;
