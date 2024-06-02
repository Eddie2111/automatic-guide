"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const user_validation_1 = require("../../../schema/validation/user.validation");
const error_1 = require("../../../templates/error");
const deactiveAccount_controller_1 = tslib_1.__importDefault(require("./deactiveAccount.controller"));
const router = express_1.default.Router();
router
    .route("/")
    .get((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = user_validation_1.userPropsAccountSchema.parse({ serial: req.query.serial });
        res.json(Object.assign(Object.assign({}, data), { message: yield (0, deactiveAccount_controller_1.default)(data) }));
    }
    catch (err) {
        (0, error_1.ErrorHandler)(err, res);
    }
}))
    .post((req, res) => {
    res.json({});
});
module.exports = router;
//# sourceMappingURL=route.js.map