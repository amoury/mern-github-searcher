import { combineReducers } from 'redux';

import { usersReducer, usersBySearchTermReducer } from './users.reducers';
import { reposReducer, reposBySearchTermReducer } from './repo.reducers';
import { searchReducer } from './search.reducers';

import { User, UsersBySearchTermState } from 'types/user.types';
import { Repo, ReposBySearchTermState } from 'types/repo.types';
import { SearchQuery } from 'types/search.types';

export interface StoreState {
  users: User[];
  search: SearchQuery;
  usersBySearchTerms: UsersBySearchTermState;
  repos: Repo[];
  reposBySearchTerms: ReposBySearchTermState;
}

export const rootReducer = combineReducers<StoreState>({
  users: usersReducer,
  search: searchReducer,
  usersBySearchTerms: usersBySearchTermReducer,
  repos: reposReducer,
  reposBySearchTerms: reposBySearchTermReducer,
});
