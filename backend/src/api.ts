import axios from 'axios';
import { SearchQuery } from './types';

axios.interceptors.request.use(config => {
  const githubToken = process.env.GITHUB_TOKEN;
  config.headers.Authorization = `token ${githubToken}`;

  return config;
});

export const getSearchResults = async (searchQuery: SearchQuery) => {
  const { query, entity } = searchQuery;
  return await axios.get(`https://api.github.com/search/${entity}?q=${query}`);
};

export const getBulkUserDetails = async (urls: string[]) => {
  const userDetailPromises = urls.map(url => axios.get(url));
  return await Promise.all([...userDetailPromises]);
};
