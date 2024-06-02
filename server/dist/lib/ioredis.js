"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRedisInstance = exports.Connect_cache = void 0;
const ioredis_1 = require("ioredis");
("use strict");
let redis;
let conn;
function Connect_cache(url) {
    try {
        conn = new ioredis_1.Redis(url || " ");
        console.log("Redis ->", 200);
        return conn;
    }
    catch (err) {
        console.log("Error creating connection for ", url);
        return conn;
    }
}
exports.Connect_cache = Connect_cache;
function getRedisInstance() {
    if (!conn) {
        throw new Error("Redis connection has not been established yet.");
    }
    return conn;
}
exports.getRedisInstance = getRedisInstance;
//# sourceMappingURL=ioredis.js.map