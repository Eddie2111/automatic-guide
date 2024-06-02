"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const task_schema_1 = require("../../../schema/database/task.schema");
const error_1 = require("../../../templates/error");
const router = express_1.default.Router();
router.route("/").get((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.query.id;
        const task = yield task_schema_1.Task.findOne({ serial: taskId !== null && taskId !== void 0 ? taskId : "" });
        if (task) {
            res.json({ status: 200, data: task });
        }
        else {
            res.json({ status: 404, message: "Task not found" });
        }
    }
    catch (err) {
        (0, error_1.ErrorHandler)(err, res);
    }
}));
module.exports = router;
//# sourceMappingURL=route.js.map