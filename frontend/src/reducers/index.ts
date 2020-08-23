import { combineReducers } from 'redux';

import { searchQueryReducer } from './search.reducers';
import { searchResultsReducer } from './results.reducers';
import { statusReducer } from './status.reducers';
import { cacheReducer } from './cache.reducers';

import { Status } from 'types/status.types';
import { SearchQuery } from 'types/search.types';
import { ResponseItem } from 'types/results.types';

export interface StoreState {
  searchQuery: SearchQuery;
  searchResults: ResponseItem[];
  status: Status;
  cache: { [key: string]: ResponseItem[] };
}

export const rootReducer = combineReducers<StoreState>({
  searchQuery: searchQueryReducer,
  searchResults: searchResultsReducer,
  status: statusReducer,
  cache: cacheReducer,
});
