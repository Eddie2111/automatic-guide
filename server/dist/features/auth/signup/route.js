"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const user_validation_1 = require("../../../schema/validation/user.validation");
const error_1 = require("../../../templates/error");
const IDGenerator_1 = require("../../../utils/IDGenerator");
const signup_controller_1 = tslib_1.__importDefault(require("./signup.controller"));
const router = express_1.default.Router();
router
    .route("/")
    .get((req, res) => {
    res.status(400).send("Server not found");
})
    .post((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = req.body;
        const parsedValue = value;
        const filterValue = user_validation_1.userPropsSchema.parse(parsedValue);
        const operation = yield (0, signup_controller_1.default)(Object.assign(Object.assign({}, filterValue), { serial: (0, IDGenerator_1.idGenerate)(), role: filterValue.role }));
        res.json({
            status: operation ? 200 : 400,
            message: operation ? "Account Created" : "Email exists",
            data: operation,
        });
    }
    catch (err) {
        (0, error_1.ErrorHandler)(err, res);
    }
}));
module.exports = router;
//# sourceMappingURL=route.js.map