"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = exports.idGenerate = void 0;
const uuid_1 = require("uuid");
function idGenerate() {
    return (0, uuid_1.v4)();
}
exports.idGenerate = idGenerate;
function randomInt() {
    const min = Math.ceil(1000000);
    const max = Math.floor(9999999);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.randomInt = randomInt;
//# sourceMappingURL=IDGenerator.js.map