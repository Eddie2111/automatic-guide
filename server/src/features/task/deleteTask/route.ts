import express, { Request, Response } from "express";

import { Task } from "../../../schema/database/task.schema";
import { ErrorHandler } from "../../../templates/error";

const router = express.Router();

router.route("/").post(async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		const taskId = req.body.serial;
		console.log(taskId);
		const task = await Task.findOneAndDelete({ serial: taskId ?? "" });
		if (task) {
			res.json({ status: 200, message: "Task deleted" });
		} else {
			res.json({ status: 404, message: "Task not found" });
		}
	} catch (err: unknown) {
		ErrorHandler(err, res);
	}
});

module.exports = router;
