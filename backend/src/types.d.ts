export interface SearchQuery {
  entity: string;
  query: string;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  type: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  hireable: string;
  location: string;
  bio: string;
  public_repos: string;
  followers: string;
}

export interface Repo {
  name: string;
  full_name: string;
  owner: { login: string };
  html_url: string;
  description: string;
  stargazers_count: string;
  watchers_count: string;
  forks_count: string;
  type: string;
}
