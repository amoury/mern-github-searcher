"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = __importDefault(require("redis"));
var util_1 = require("util");
var redisUrl = 'redis://127.0.0.1:6379';
var client = redis_1.default.createClient(redisUrl);
exports.client = client;
var CACHE_DURATION = 7200;
exports.CACHE_DURATION = CACHE_DURATION;
client.on('error', function (err) { return console.error(err); });
var getAsync = util_1.promisify(client.get).bind(client);
exports.getAsync = getAsync;
