"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const user_validation_1 = require("../../../schema/validation/user.validation");
const error_1 = require("../../../templates/error");
const responses_1 = require("../../../templates/responses");
const removeAccount_controller_1 = tslib_1.__importDefault(require("./removeAccount.controller"));
const router = express_1.default.Router();
router
    .route("/")
    .get((req, res) => {
    res.json(responses_1.successResponse);
})
    .post((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = user_validation_1.userPropsAccountSchema.parse(req.body);
        const operation = yield (0, removeAccount_controller_1.default)(value);
        res.json({
            status: operation ? 200 : 400,
            message: operation ? "Account Removed" : "Failed to remove account",
            data: operation
        });
    }
    catch (err) {
        (0, error_1.ErrorHandler)(err, res);
    }
}));
module.exports = router;
//# sourceMappingURL=route.js.map