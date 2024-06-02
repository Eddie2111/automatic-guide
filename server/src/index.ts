import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import fs from "fs";
import morgan from "morgan";
import path from "path";

import { Mongo_Connect } from "./lib/mongo";
import { corsOptions, sessionSettings } from "./configs";

dotenv.config();

const app = express();

const port: string = (process.env.PORT as string) ?? "3100";
const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });

app.use(cookieParser());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// features

// auth services
app.use("/", require("./features/auth/index/route"));
app.use("/login", require("./features/auth/login/route"));
app.use("/signup", require("./features/auth/signup/route"));

// task services
app.use("/task/create", require("./features/task/createTasks/route"));
app.use("/task/createByEmployee", require("./features/task/createTasksByEmployee/route"));
app.use("/task/getTask", require("./features/task/getTask/route"));
app.use("/task/updateTask", require("./features/task/updateTask/route"));
app.use("/task/deleteTask", require("./features/task/deleteTask/route"));
app.use("/task/getTasks", require("./features/task/getTasks/route"));
app.use("/task/getTasksEmployee", require("./features/task/getTasksEmployee/route"));

// employee services
app.use("/employee/getAll", require("./features/employees/getAllEmployee"));
app.use("/employee/getOnlyEmployee", require("./features/employees/getOnlyEmployee"));
app.use("/employee/getOne", require("./features/employees/getOneEmployee"));
app.listen(parseInt(port), async () => {
	await Mongo_Connect();
	console.log("server →", port);
});
