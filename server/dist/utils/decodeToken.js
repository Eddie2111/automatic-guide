"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
function decodeToken(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const secret = (_a = process.env.SECRET) !== null && _a !== void 0 ? _a : "";
            const response = (yield jsonwebtoken_1.default.verify(token !== null && token !== void 0 ? token : "", secret));
            return response;
        }
        catch (err) {
            console.log(err);
            return {
                serial: null,
                email: null,
                role: null,
                iat: null,
                exp: null,
            };
        }
    });
}
exports.decodeToken = decodeToken;
//# sourceMappingURL=decodeToken.js.map