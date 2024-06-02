"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const task_schema_1 = require("../../../schema/database/task.schema");
const error_1 = require("../../../templates/error");
const router = express_1.default.Router();
router.route("/").get((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const startIndex = (page - 1) * limit;
        const tasks = yield task_schema_1.Task.find().skip(startIndex).limit(limit);
        if (tasks.length > 0) {
            res.json({ status: 200, data: tasks });
        }
        else {
            res.json({ status: 404, message: "No tasks found for the requested page" });
        }
    }
    catch (err) {
        (0, error_1.ErrorHandler)(err, res);
    }
}));
module.exports = router;
//# sourceMappingURL=route.js.map