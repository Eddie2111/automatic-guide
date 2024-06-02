"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
    serial: {
        type: String,
        unique: true,
    },
    firstName: {
        type: String,
        maxlength: 16,
    },
    lastName: {
        type: String,
        maxlength: 16,
    },
    email: {
        type: String,
        maxlength: 35,
        unique: true,
    },
    password: {
        type: String,
        maxlength: 120,
    },
    role: {
        type: String,
        required: true,
    },
});
exports.User = mongoose_1.default.model("Users", userSchema);
//# sourceMappingURL=user.schema.js.map