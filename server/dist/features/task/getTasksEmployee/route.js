"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const task_schema_1 = require("../../../schema/database/task.schema");
const error_1 = require("../../../templates/error");
const decodeToken_1 = require("../../../utils/decodeToken");
const router = express_1.default.Router();
router.route("/").get((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log("ping!");
    try {
        const userID = (_a = req.cookies.user) !== null && _a !== void 0 ? _a : "";
        if (!userID) {
            return res.status(401).json({ status: 401, message: "Unauthorized" });
        }
        const decoded = yield (0, decodeToken_1.decodeToken)(userID);
        if (!decoded || !decoded.serial) {
            return res.status(401).json({ status: 401, message: "Invalid user token" });
        }
        const page = parseInt(req.query.page) || 1;
        if (page < 1) {
            return res.status(400).json({ status: 400, message: "Invalid page number" });
        }
        const limit = 10;
        const startIndex = (page - 1) * limit;
        console.log(decoded);
        const tasks = yield task_schema_1.Task.find({ assignedTo: (_b = decoded === null || decoded === void 0 ? void 0 : decoded.serial) !== null && _b !== void 0 ? _b : "" })
            .skip(startIndex)
            .limit(limit);
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