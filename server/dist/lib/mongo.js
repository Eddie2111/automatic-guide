"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongo_Connect = exports.mongooseConn = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
dotenv_1.default.config();
const mongoDB_url = (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : "";
function Mongo_Connect() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            if (!exports.mongooseConn) {
                exports.mongooseConn = yield (0, mongoose_1.connect)(mongoDB_url);
                console.log("mongoDB ->", 200);
            }
            else {
                console.log("using cached connection");
            }
            return exports.mongooseConn;
        }
        catch (err) {
            console.log(" Mongoose connection error! ");
            return exports.mongooseConn;
        }
    });
}
exports.Mongo_Connect = Mongo_Connect;
//# sourceMappingURL=mongo.js.map