"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomError_1 = require("../errors/CustomError");
exports.errorHandler = function (err, req, res, next) {
    if (err instanceof CustomError_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({ errors: [{ message: err.message || 'Something went wrong' }] });
};
