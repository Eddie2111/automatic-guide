"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const responses_1 = require("../../../templates/responses");
const router = express_1.default.Router();
router
    .route("/")
    .get((req, res) => {
    res.json(responses_1.successResponse);
})
    .post((req, res) => {
    res.json(responses_1.successResponse);
});
module.exports = router;
//# sourceMappingURL=route.js.map