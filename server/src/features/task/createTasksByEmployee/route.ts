import express, { Request, Response } from "express";

import { TaskSchema } from "../../../schema/validation/task.validation";
import { ErrorHandler } from "../../../templates/error";
import { decodeToken } from "../../../utils/decodeToken";
import { idGenerate } from "../../../utils/IDGenerator";
import CreateTask from "./create.controller";

const router = express.Router();

router
	.route("/")
	.get((req: Request, res: Response) => {
		res.status(400).send("Method not supported");
	})
	.post(async (req: Request, res: Response) => {
		try {
			const value = req.body;
			const decoded = await decodeToken(req.cookies.user ?? "");
			const parsedBody = TaskSchema.parse({ ...value, assignedBy: decoded?.serial, serial: idGenerate() ?? "" });
			await CreateTask(parsedBody, decoded, res);
		} catch (err: unknown) {
			ErrorHandler(err, res);
		}
	});

module.exports = router;
//
