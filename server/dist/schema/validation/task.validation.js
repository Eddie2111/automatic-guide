"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const zod_1 = require("zod");
exports.TaskSchema = zod_1.z.object({
    serial: zod_1.z.string(),
    title: zod_1.z.string().max(32),
    description: zod_1.z.string().max(1024),
    createdAt: zod_1.z.string().optional(),
    updatedAt: zod_1.z.string().optional(),
    assignedBy: zod_1.z.string().nullable().optional(),
    assignedTo: zod_1.z.array(zod_1.z.string()).optional(),
    status: zod_1.z.enum(["Active", "Inactive", "Done", "Removed"]).optional(),
});
//# sourceMappingURL=task.validation.js.map