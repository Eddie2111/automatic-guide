"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordSet = exports.forgotPasswordTrigger = void 0;
const tslib_1 = require("tslib");
const argon2_1 = tslib_1.__importDefault(require("argon2"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const ioredis_1 = require("../../../lib/ioredis");
const prisma_1 = tslib_1.__importDefault(require("../../../lib/prisma"));
const IDGenerator_1 = require("../../../utils/IDGenerator");
dotenv_1.default.config();
function forgotPasswordTrigger(data) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const redis = (0, ioredis_1.getRedisInstance)();
            const code = (0, IDGenerator_1.randomInt)();
            console.log(code);
            yield redis.setex((_a = data === null || data === void 0 ? void 0 : data.serial) !== null && _a !== void 0 ? _a : " ", 3600, code.toString());
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    });
}
exports.forgotPasswordTrigger = forgotPasswordTrigger;
function forgotPasswordSet(data) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        try {
            const redis = (0, ioredis_1.getRedisInstance)();
            const storedCode = yield redis.get((_a = data === null || data === void 0 ? void 0 : data.serial) !== null && _a !== void 0 ? _a : " ");
            const passwordhash = yield argon2_1.default.hash((_b = data === null || data === void 0 ? void 0 : data.password) !== null && _b !== void 0 ? _b : "");
            if (storedCode === (data === null || data === void 0 ? void 0 : data.code)) {
                yield prisma_1.default.users.update({
                    where: {
                        serial: (_c = data === null || data === void 0 ? void 0 : data.serial) !== null && _c !== void 0 ? _c : ""
                    },
                    data: {
                        password: passwordhash
                    }
                });
                return true;
            }
            else {
                return false;
            }
        }
        catch (err) {
            console.log(err);
            return false;
        }
    });
}
exports.forgotPasswordSet = forgotPasswordSet;
//# sourceMappingURL=forgotPassword.controller.js.map