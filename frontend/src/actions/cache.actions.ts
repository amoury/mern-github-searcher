import { UpdateCache, CacheActionTypes } from 'types/cache.types';
import { ResponseItem } from 'types/results.types';

export const updateCache = (cacheKey: string, results: ResponseItem[]): UpdateCache => ({
  type: CacheActionTypes.UPDATE_CACHE,
  payload: { [cacheKey]: results },
});
