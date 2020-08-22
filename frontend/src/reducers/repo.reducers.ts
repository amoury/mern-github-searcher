import { Repo, RepoAction, RepoActionTypes, ReposBySearchTermState } from 'types/repo.types';
import { SearchActionTypes, SearchAction } from 'types/search.types';

export const reposReducer = (state: Repo[] = [], action: RepoAction | SearchAction) => {
  switch (action.type) {
    case RepoActionTypes.RECEIVE_REPOS:
      return action.payload;
    case SearchActionTypes.RESET_CURRENT_STATE:
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
