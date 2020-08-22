"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = require("./routes");
var error_handler_middleware_1 = require("./middlewares/error-handler.middleware");
var app = express_1.default();
dotenv_1.default.config();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(routes_1.router);
app.get('/api/search-something', function (req, res) {
    throw new Error('hello');
});
app.use(error_handler_middleware_1.errorHandler);
app.listen(3001, function () { return console.log('Listening on port 3001'); });
