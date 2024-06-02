import express, { Request, Response } from "express";

import { Task } from "../../../schema/database/task.schema";
import { ErrorHandler } from "../../../templates/error";

const router = express.Router();

router.route("/").get(async (req: Request, res: Response) => {
	try {
		const taskId = req.query.id;
		const task = await Task.findOne({ serial: taskId ?? "" });
		if (task) {
			res.json({ status: 200, data: task });
		} else {
			res.json({ status: 404, message: "Task not found" });
		}
	} catch (err: unknown) {
		ErrorHandler(err, res);
	}
});

module.exports = router;
