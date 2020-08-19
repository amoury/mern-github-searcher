import { usersReducer } from './users.reducers';
import { combineReducers } from 'redux';
import { User } from 'types/user.types';

export interface StoreState {
  users: User[];
}

export const reducers = combineReducers<StoreState>({
  users: usersReducer,
});
