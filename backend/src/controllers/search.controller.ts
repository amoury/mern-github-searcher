import _get from 'lodash/get';
import _pick from 'lodash/pick';
import { getAsync, client, CACHE_DURATION } from './../cache';
import { SearchQuery, User, Repo } from '../types';
import { getBulkUserDetails, getSearchResults } from '../api';

export const search = async (searchQuery: SearchQuery) => {
  const { entity } = searchQuery;
  const cacheKey = JSON.stringify(searchQuery);

  try {
    const cacheValue = await getAsync(cacheKey);

    if (cacheValue) {
      console.log('SERVING FROM CACHE >>> ', cacheValue);
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
  } catch (error) {}
};

const requiredUserFields = [
  'login',
  'id',
  'avatar_url',
  'url',
  'type',
  'html_url',
  'name',
  'company',
  'blog',
  'hireable',
  'location',
  'bio',
  'public_repos',
  'followers',
];

const requiredRepoFields = [
  'name',
  'full_name',
  'owner.login',
  'html_url',
  'description',
  'stargazers_count',
  'watchers_count',
  'forks_count',
];

export const handleUserResponse = async (users: User[], cacheKey: string) => {
  const userDetailUrls = users.map(user => user.url);
  try {
    const users = await getBulkUserDetails(userDetailUrls);
    const response = users.map(user => user.data).map(user => _pick(user, requiredUserFields));
    client.set(cacheKey, JSON.stringify(response), 'EX', CACHE_DURATION);
    return response;
  } catch (error) {
    console.error('error >>>> ', error.message);
  }
};

export const handleRepoResponse = (repos: Repo[], cacheKey: string) => {
  const response = repos.map(repo => _pick(repo, requiredRepoFields));
  client.set(cacheKey, JSON.stringify(response), 'EX', CACHE_DURATION);
  return response;
};
