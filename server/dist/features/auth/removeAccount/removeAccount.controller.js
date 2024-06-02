"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../../lib/prisma"));
function RemoveAccount(data) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield prisma_1.default.users.delete({
                where: {
                    email: (_a = data === null || data === void 0 ? void 0 : data.email) !== null && _a !== void 0 ? _a : ""
                }
            });
            return true;
        }
        catch (err) {
            return false;
        }
    });
}
exports.default = RemoveAccount;
//# sourceMappingURL=removeAccount.controller.js.map