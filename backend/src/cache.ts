import redis from 'redis';
import { promisify } from 'util';

const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);
const CACHE_DURATION = 7200;

client.on('error', err => console.error(err));

const getAsync = promisify(client.get).bind(client);

export { client, getAsync, CACHE_DURATION };
