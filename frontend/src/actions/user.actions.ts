import { User, UserActionTypes } from 'types/user.types';
import { SearchResponse } from './search.actions';

interface UserSearchResponse extends SearchResponse {
  items: User[];
}

export const receiveUsers = (results: UserSearchResponse, searchTerm: string) => ({
  type: UserActionTypes.RECEIVE_USERS,
  payload: results,
  searchTerm,
});
