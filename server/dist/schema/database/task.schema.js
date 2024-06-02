"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const taskSchema = new mongoose_1.Schema({
    serial: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        maxlength: 32,
        required: true,
    },
    description: {
        type: String,
        maxlength: 1024,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    assignedBy: {
        type: String,
        default: null,
    },
    assignedTo: {
        type: [String],
        default: [],
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Done", "Removed"],
        default: "Active",
        required: true,
    },
});
exports.Task = mongoose_1.default.model("tasks", taskSchema);
//# sourceMappingURL=task.schema.js.map