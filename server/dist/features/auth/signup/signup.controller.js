"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const argon2_1 = tslib_1.__importDefault(require("argon2"));
const user_schema_1 = require("../../../schema/database/user.schema");
function SignupUser(data) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        try {
            const passwordhash = yield argon2_1.default.hash((_a = data === null || data === void 0 ? void 0 : data.password) !== null && _a !== void 0 ? _a : "");
            console.log(data);
            const user = new user_schema_1.User({
                serial: (_b = data === null || data === void 0 ? void 0 : data.serial) !== null && _b !== void 0 ? _b : "",
                firstName: (_c = data === null || data === void 0 ? void 0 : data.firstName) !== null && _c !== void 0 ? _c : "",
                lastName: (_d = data === null || data === void 0 ? void 0 : data.lastName) !== null && _d !== void 0 ? _d : "",
                email: (_e = data === null || data === void 0 ? void 0 : data.email) !== null && _e !== void 0 ? _e : "",
                password: passwordhash,
                role: (_f = data === null || data === void 0 ? void 0 : data.role) !== null && _f !== void 0 ? _f : "USER",
            });
            yield user.save();
            console.log(" User ", data === null || data === void 0 ? void 0 : data.firstName, data === null || data === void 0 ? void 0 : data.lastName, "with email", data === null || data === void 0 ? void 0 : data.email, "created account successfully");
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    });
}
exports.default = SignupUser;
//# sourceMappingURL=signup.controller.js.map