"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const zod_1 = require("zod");
function ErrorHandler(err, res) {
    if (err instanceof zod_1.ZodError) {
        const errorFields = err.errors.map((error) => error.path.join("."));
        res.status(400).json({ status: 400, message: "Validation error", data: errorFields });
    }
    else {
        console.error("An unexpected error occurred:", err);
        res.status(500).json({ status: 500, message: "Internal server error", data: {} });
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error.js.map