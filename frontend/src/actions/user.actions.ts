import { User, Repo, UserActionTypes } from 'types/user.types';
import { SearchQuery } from 'types/search.types';
import { Dispatch } from 'redux';
import axios from 'axios';
import { SearchResponse } from './search.actions';
import _get from 'lodash/get';

interface UserSearchResponse extends SearchResponse {
  items: User[];
}

export const receiveUsers = (results: UserSearchResponse, searchTerm: string) => ({
  type: UserActionTypes.RECEIVE_USERS,
  payload: results,
  searchTerm,
});

// interface UserSearchResponse {
//   total_count: number;
//   items: User[];
// }

// interface RepoSearchResponse {
//   total_count: number;
//   items: Repo[];
// }

// type SearchReponse = UserSearchResponse | RepoSearchResponse;

// const requestSearch = (searchQuery: SearchQuery) => ({ type: 'REQUEST_SEARCH', searchQuery });

// const receiveUsers = (query: string, results: SearchReponse) => {
//   return {
//     type: 'RECEIVE_USERS',
//     query,
//     users: _get(results, 'data.items'),
//     receivedAt: Date.now(),
//   };
// };

// const receiveRepos = (query: string, results: SearchReponse) => {
//   return {
//     type: 'RECEIVE_REPOS',
//     query,
//     repos: _get(results, 'data.items'),
//     receivedAt: Date.now(),
//   };
// };

// export const fetchSearchResults = (searchQuery: SearchQuery) => {
//   const { entity, query } = searchQuery;

//   return async (dispatch: Dispatch) => {
//     dispatch(requestSearch(searchQuery));

//     const response = await axios.get<SearchReponse>(
//       `https://api.github.com/search/${entity}?q=${query}`
//     );

//     entity === 'users'
//       ? dispatch(receiveUsers(query, response.data))
//       : dispatch(receiveRepos(query, response.data));
//   };
// };
