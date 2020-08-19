import { UserActionTypes, User, FetchUsersAction } from 'types/user.types';
import { Dispatch } from 'redux';
import axios from 'axios';
import _get from 'lodash/get';

interface UserSearchResponse {
  total_count: number;
  items: User[];
}

interface SearchQuery {
  type: string;
  query: string;
}

export const fetchUsers = (searchQuery: SearchQuery) => {
  const { type, query } = searchQuery;
  return async (dispatch: Dispatch) => {
    const response = await axios.get<UserSearchResponse>(
      `https://api.github.com/search/${type}?q=${query}`
    );

    dispatch<FetchUsersAction>({
      type: UserActionTypes.FETCH_USERS,
      payload: _get(response, 'data.items'),
    });
  };
};
