"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const path_1 = tslib_1.__importDefault(require("path"));
const mongo_1 = require("./lib/mongo");
const configs_1 = require("./configs");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3100";
const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, "access.log"), { flags: "a" });
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)("combined", { stream: accessLogStream }));
app.use((0, cors_1.default)(configs_1.corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", require("./features/auth/index/route"));
app.use("/login", require("./features/auth/login/route"));
app.use("/signup", require("./features/auth/signup/route"));
app.use("/task/create", require("./features/task/createTasks/route"));
app.use("/task/createByEmployee", require("./features/task/createTasksByEmployee/route"));
app.use("/task/getTask", require("./features/task/getTask/route"));
app.use("/task/updateTask", require("./features/task/updateTask/route"));
app.use("/task/deleteTask", require("./features/task/deleteTask/route"));
app.use("/task/getTasks", require("./features/task/getTasks/route"));
app.use("/task/getTasksEmployee", require("./features/task/getTasksEmployee/route"));
app.use("/employee/getAll", require("./features/employees/getAllEmployee"));
app.use("/employee/getOnlyEmployee", require("./features/employees/getOnlyEmployee"));
app.use("/employee/getOne", require("./features/employees/getOneEmployee"));
app.listen(parseInt(port), () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.Mongo_Connect)();
    console.log("server →", port);
}));
//# sourceMappingURL=index.js.map