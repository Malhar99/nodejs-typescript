"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
var pg_1 = require("pg");
var config_1 = require("./config");
var pool = new pg_1.Pool({
    user: config_1.Connection.USER,
    host: config_1.Connection.HOST,
    database: config_1.Connection.DATABASE,
    password: config_1.Connection.PASSWORD,
    port: config_1.Connection.PORT,
});
var DB = pool;
exports.DB = DB;
//# sourceMappingURL=dbConnection.js.map