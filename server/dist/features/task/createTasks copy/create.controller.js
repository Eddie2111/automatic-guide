"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const task_schema_1 = require("../../../schema/database/task.schema");
const user_schema_1 = require("../../../schema/database/user.schema");
const responses_1 = require("./../../../templates/responses");
function CreateTask(parsedBody, decoded, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        if ((decoded === null || decoded === void 0 ? void 0 : decoded.role) === "ADMIN") {
            const creator = yield user_schema_1.User.findOne({ serial: (_a = decoded === null || decoded === void 0 ? void 0 : decoded.serial) !== null && _a !== void 0 ? _a : "" });
            if ((creator === null || creator === void 0 ? void 0 : creator.role) === "ADMIN") {
                const task = new task_schema_1.Task(parsedBody);
                try {
                    yield task.save();
                    res.json(Object.assign(Object.assign({}, responses_1.successResponse), { data: "task assigned" }));
                }
                catch (err) {
                    console.log(err);
                    res.json(Object.assign(Object.assign({}, responses_1.failureResponse), { data: "Task creation failed due to validation error" }));
                }
            }
            else {
                res.json(Object.assign(Object.assign({}, responses_1.failureResponse), { data: "task was not assigned because you are not an admin" }));
            }
        }
        else {
            res.json(Object.assign(Object.assign({}, responses_1.failureResponse), { data: "task was not assigned due to service failure" }));
        }
    });
}
exports.default = CreateTask;
//# sourceMappingURL=create.controller.js.map