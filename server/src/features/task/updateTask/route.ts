import express, { Request, Response } from "express";

import { Task } from "../../../schema/database/task.schema";
import { ErrorHandler } from "../../../templates/error";

const router = express.Router();

router.route("/").post(async (req: Request, res: Response) => {
	try {
		const taskId = req.body.serial as string;
		const updateData = req.body; // Assuming update data is provided in the request body
		const updatedTask = await Task.findOneAndUpdate({ serial: taskId }, updateData, { new: true });
		if (updatedTask) {
			res.status(200).json({ status: 200, message: "Task updated", task: updatedTask });
		} else {
			res.status(404).json({ status: 404, message: "Task not found" });
		}
	} catch (error) {
		ErrorHandler(error, res);
	}
});

module.exports = router;
