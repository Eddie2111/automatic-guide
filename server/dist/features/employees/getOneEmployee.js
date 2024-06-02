"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const user_schema_1 = require("../../schema/database/user.schema");
const error_1 = require("../../templates/error");
const router = express_1.default.Router();
router.route("/").get((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id || "";
        const user = yield user_schema_1.User.findOne({ serial: id !== null && id !== void 0 ? id : "" });
        if (user) {
            res.json({ status: 200, data: user });
        }
        else {
            res.json({ status: 404, message: "No users found for the requested id" });
        }
    }
    catch (err) {
        (0, error_1.ErrorHandler)(err, res);
    }
}));
module.exports = router;
//# sourceMappingURL=getOneEmployee.js.map