import _get from 'lodash/get';
import _pick from 'lodash/pick';
import { getAsync, client, CACHE_DURATION } from './../cache';
import { SearchQuery, User, Repo } from '../types';
import { getBulkUserDetails, getSearchResults } from '../api';
import { AuthorizationError } from '../errors/AuthorizationError';

export const search = async (searchQuery: SearchQuery) => {
  const { entity } = searchQuery;
  const cacheKey = JSON.stringify(searchQuery);

  try {
    const cacheValue = await getAsync(cacheKey);

    if (cacheValue) {
      console.log('SERVING FROM CACHE >>> ');
      return JSON.parse(cacheValue);
    }

    const response = await getSearchResults(searchQuery);
    const items = _get(response, 'data.items', []);

    if (entity === 'users') {
      return handleUserResponse(items, cacheKey);
    }

    if (entity === 'repositories') {
      return handleRepoResponse(items, cacheKey);
    }
  } catch (error) {
    const message = _get(error, 'response.data.message');
    throw new AuthorizationError(message);
  }
};

const requiredUserFields = [
  'login',
  'id',
  'avatar_url',
  'url',
  'type',
  'html_url',
  'stats',
  'meta',
  'name',
  'hireable',
  'bio',
];

const requiredRepoFields = ['type', 'meta', 'login', 'name', 'stats', 'html_url', 'description'];

export const handleUserResponse = async (users: User[], cacheKey: string) => {
  const userDetailUrls = users.map(user => user.url);
  try {
    const users = await getBulkUserDetails(userDetailUrls);
    const response = users
      .map(user => user.data)
      .map(user => ({
        ..._pick(user, requiredUserFields),
        meta: [user.blog, user.company, user.location],
        description: user.bio,
        stats: {
          public_repos: user.public_repos,
          followers: user.followers,
          following: user.following,
        },
      }));
    client.set(cacheKey, JSON.stringify(response), 'EX', CACHE_DURATION);
    return response;
  } catch (error) {
    const message = _get(error, 'response.data.message');
    throw new AuthorizationError(message);
  }
};

export const handleRepoResponse = (repos: Repo[], cacheKey: string) => {
  const response = repos
    .map(repo => ({
      ...repo,
      type: 'Repository',
      login: _get(repo, 'owner.login', ''),
      meta: [repo.full_name],
      stats: {
        stargazers: repo.stargazers_count,
        watchers: repo.watchers_count,
        forks: repo.forks_count,
      },
    }))
    .map(repo => _pick(repo, requiredRepoFields));
  client.set(cacheKey, JSON.stringify(response), 'EX', CACHE_DURATION);
  return response;
};
