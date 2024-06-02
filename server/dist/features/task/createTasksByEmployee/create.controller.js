"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const task_schema_1 = require("../../../schema/database/task.schema");
const responses_1 = require("./../../../templates/responses");
function CreateTask(parsedBody, decoded, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        const task = new task_schema_1.Task(Object.assign(Object.assign({}, parsedBody), { assignedTo: (_a = decoded === null || decoded === void 0 ? void 0 : decoded.serial) !== null && _a !== void 0 ? _a : "" }));
        try {
            yield task.save();
            res.json(Object.assign(Object.assign({}, responses_1.successResponse), { data: "task assigned" }));
        }
        catch (err) {
            console.log(err);
            res.json(Object.assign(Object.assign({}, responses_1.failureResponse), { data: "Task creation failed due to validation error" }));
        }
    });
}
exports.default = CreateTask;
//# sourceMappingURL=create.controller.js.map