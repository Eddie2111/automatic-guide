"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const argon2_1 = tslib_1.__importDefault(require("argon2"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const user_schema_1 = require("../../../schema/database/user.schema");
function LoginUser(data, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        try {
            const query = user_schema_1.User.where({ email: (_a = data === null || data === void 0 ? void 0 : data.email) !== null && _a !== void 0 ? _a : "" });
            const response = yield query.findOne();
            if (!response) {
                return res.json({
                    data: {},
                    message: "No User Found",
                    status: 400,
                });
            }
            const passwordMatch = yield argon2_1.default.verify((_b = response === null || response === void 0 ? void 0 : response.password) !== null && _b !== void 0 ? _b : "", (_c = data === null || data === void 0 ? void 0 : data.password) !== null && _c !== void 0 ? _c : "");
            if (passwordMatch) {
                const payload = {
                    serial: response === null || response === void 0 ? void 0 : response.serial,
                    email: response === null || response === void 0 ? void 0 : response.email,
                };
                const secret = (_d = process.env.SECRET) !== null && _d !== void 0 ? _d : "secret";
                const token = jsonwebtoken_1.default.sign(payload, secret);
                res.cookie("user", payload, {
                    httpOnly: true,
                    secure: true,
                });
                res.json({
                    data: payload,
                    message: "login success",
                    status: 200,
                });
            }
            else {
                res.json({
                    data: {},
                    message: "login failed",
                    status: 400,
                });
            }
        }
        catch (err) {
            console.log(err);
            return false;
        }
    });
}
exports.default = LoginUser;
//# sourceMappingURL=login.controller.js.map