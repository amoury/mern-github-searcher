import { usersReducer, usersBySearchTermReducer } from './users.reducers';
import { searchReducer } from './search.reducers';
import { combineReducers } from 'redux';
import { User, UsersBySearchTermState } from 'types/user.types';
import { SearchQuery } from 'types/search.types';

export interface StoreState {
  users: User[];
  search: SearchQuery;
  usersBySearchTerms: UsersBySearchTermState;
}

export const rootReducer = combineReducers<StoreState>({
  users: usersReducer,
  search: searchReducer,
  usersBySearchTerms: usersBySearchTermReducer,
});
