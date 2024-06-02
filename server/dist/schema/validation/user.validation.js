"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodError = exports.profileSchema = exports.userPropsAccountSchema = exports.userPropsLoginSchema = exports.userPropsSchema = void 0;
const zod_1 = require("zod");
Object.defineProperty(exports, "ZodError", { enumerable: true, get: function () { return zod_1.ZodError; } });
exports.userPropsSchema = zod_1.z.object({
    firstName: zod_1.z.string().max(16).min(4),
    lastName: zod_1.z.string().max(16).min(3),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    role: zod_1.z.enum(["ADMIN", "USER"]).optional().nullable(),
});
exports.userPropsLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.userPropsAccountSchema = zod_1.z.object({
    serial: zod_1.z.string().min(30).max(36).optional(),
    email: zod_1.z.string().email().min(7).max(35).optional(),
});
exports.profileSchema = zod_1.z.object({
    about: zod_1.z.string().optional(),
    profileLinks: zod_1.z.array(zod_1.z.string()),
    phoneNumber: zod_1.z.string().max(16),
    terrainId: zod_1.z.string().max(38),
    userId: zod_1.z.number().int(),
    profileId: zod_1.z.number().nullable(),
});
//# sourceMappingURL=user.validation.js.map