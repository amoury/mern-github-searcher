import { Repo, RepoActionTypes } from 'types/repo.types';
import { SearchResponse } from './search.actions';

interface RepoSearchResponse extends SearchResponse {
  items: Repo[];
}

export const receiveRepos = (results: RepoSearchResponse, searchTerm: string) => ({
  type: RepoActionTypes.RECEIVE_REPOS,
  payload: results,
  searchTerm,
});

export const resetRepoRecords = () => ({
  type: RepoActionTypes.RESET_REPOS,
});
