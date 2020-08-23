import { UpdateCache, CacheActionTypes } from 'types/cache.types';
import { ResponseItem } from 'types/results.types';

const cacheReducer = (state: { [key: string]: ResponseItem[] } = {}, action: UpdateCache) => {
  switch (action.type) {
    case CacheActionTypes.UPDATE_CACHE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export { cacheReducer };
