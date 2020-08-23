import { ResponseItem } from './results.types';

export enum CacheActionTypes {
  UPDATE_CACHE = 'UPDATE_CACHE',
}

export interface UpdateCache {
  type: CacheActionTypes.UPDATE_CACHE;
  payload: { [key: string]: ResponseItem[] };
}
