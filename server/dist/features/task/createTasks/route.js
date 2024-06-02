"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const task_validation_1 = require("../../../schema/validation/task.validation");
const error_1 = require("../../../templates/error");
const decodeToken_1 = require("../../../utils/decodeToken");
const IDGenerator_1 = require("../../../utils/IDGenerator");
const create_controller_1 = tslib_1.__importDefault(require("./create.controller"));
const router = express_1.default.Router();
router
    .route("/")
    .get((req, res) => {
    res.status(400).send("Method not supported");
})
    .post((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const value = req.body;
        const decoded = yield (0, decodeToken_1.decodeToken)((_a = req.cookies.user) !== null && _a !== void 0 ? _a : "");
        const parsedBody = task_validation_1.TaskSchema.parse(Object.assign(Object.assign({}, value), { assignedBy: decoded === null || decoded === void 0 ? void 0 : decoded.serial, serial: (_b = (0, IDGenerator_1.idGenerate)()) !== null && _b !== void 0 ? _b : "" }));
        yield (0, create_controller_1.default)(parsedBody, decoded, res);
    }
    catch (err) {
        (0, error_1.ErrorHandler)(err, res);
    }
}));
module.exports = router;
//# sourceMappingURL=route.js.map