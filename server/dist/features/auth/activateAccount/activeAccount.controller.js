"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../../../lib/prisma"));
function ActiveAccount(data) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            yield prisma_1.default.users.update({
                where: {
                    serial: (_a = data === null || data === void 0 ? void 0 : data.serial) !== null && _a !== void 0 ? _a : ""
                },
                data: {
                    active: false,
                }
            });
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    });
}
exports.default = ActiveAccount;
//# sourceMappingURL=activeAccount.controller.js.map