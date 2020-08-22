"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var pick_1 = __importDefault(require("lodash/pick"));
var cache_1 = require("./../cache");
var api_1 = require("../api");
exports.search = function (searchQuery) { return __awaiter(void 0, void 0, void 0, function () {
    var entity, cacheKey, cacheValue, response, items, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                entity = searchQuery.entity;
                cacheKey = JSON.stringify(searchQuery);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, cache_1.getAsync(cacheKey)];
            case 2:
                cacheValue = _a.sent();
                if (cacheValue) {
                    console.log('SERVING FROM CACHE >>> ', cacheValue);
                    return [2 /*return*/, JSON.parse(cacheValue)];
                }
                return [4 /*yield*/, api_1.getSearchResults(searchQuery)];
            case 3:
                response = _a.sent();
                items = get_1.default(response, 'data.items', []);
                if (entity === 'users') {
                    return [2 /*return*/, exports.handleUserResponse(items, cacheKey)];
                }
                if (entity === 'repositories') {
                    return [2 /*return*/, exports.handleRepoResponse(items, cacheKey)];
                }
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var requiredUserFields = [
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
var requiredRepoFields = [
    'name',
    'full_name',
    'owner.login',
    'html_url',
    'description',
    'stargazers_count',
    'watchers_count',
    'forks_count',
];
exports.handleUserResponse = function (users, cacheKey) { return __awaiter(void 0, void 0, void 0, function () {
    var userDetailUrls, users_1, response, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userDetailUrls = users.map(function (user) { return user.url; });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api_1.getBulkUserDetails(userDetailUrls)];
            case 2:
                users_1 = _a.sent();
                response = users_1.map(function (user) { return user.data; }).map(function (user) { return pick_1.default(user, requiredUserFields); });
                cache_1.client.set(cacheKey, JSON.stringify(response), 'EX', cache_1.CACHE_DURATION);
                return [2 /*return*/, response];
            case 3:
                error_2 = _a.sent();
                console.error('error >>>> ', error_2.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.handleRepoResponse = function (repos, cacheKey) {
    var response = repos
        .map(function (repo) { return pick_1.default(repo, requiredRepoFields); })
        .map(function (repo) { return (__assign(__assign({}, repo), { type: 'Repository' })); });
    cache_1.client.set(cacheKey, JSON.stringify(response), 'EX', cache_1.CACHE_DURATION);
    return response;
};
