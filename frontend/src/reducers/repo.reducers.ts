import { Repo, RepoAction, RepoActionTypes, ReposBySearchTermState } from 'types/repo.types';

export const reposReducer = (state: Repo[] = [], action: RepoAction) => {
  switch (action.type) {
    case RepoActionTypes.RECEIVE_REPOS:
      return action.payload;
    case RepoActionTypes.RESET_REPOS:
      return [];
    default:
      return state;
  }
};

export const reposBySearchTermReducer = (
  state: ReposBySearchTermState = {},
  action: RepoAction
) => {
  switch (action.type) {
    case RepoActionTypes.RECEIVE_REPOS:
      return { ...state, [action.searchTerm]: action.payload };
    default:
      return state;
  }
};
