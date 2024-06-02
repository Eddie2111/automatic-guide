"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const task_schema_1 = require("../../../schema/database/task.schema");
const error_1 = require("../../../templates/error");
const router = express_1.default.Router();
router.route("/").post((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.body.serial;
        const updateData = req.body;
        const updatedTask = yield task_schema_1.Task.findOneAndUpdate({ serial: taskId }, updateData, { new: true });
        if (updatedTask) {
            res.status(200).json({ status: 200, message: "Task updated", task: updatedTask });
        }
        else {
            res.status(404).json({ status: 404, message: "Task not found" });
        }
    }
    catch (error) {
        (0, error_1.ErrorHandler)(error, res);
    }
}));
module.exports = router;
//# sourceMappingURL=route.js.map