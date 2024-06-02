import express, { Request, Response } from "express";

import { TaskProps } from "./../../../schema/validation/task.validation";
import { Task } from "../../../schema/database/task.schema";
import { User } from "../../../schema/database/user.schema";
import { successResponse, failureResponse } from "./../../../templates/responses";
import type { jwtProps } from "../../../utils/decodeToken";

export default async function CreateTask(parsedBody: Partial<TaskProps | null>, decoded: Partial<jwtProps>, res: Response) {
	if (decoded?.role === "ADMIN") {
		const creator = await User.findOne({ serial: decoded?.serial ?? "" });
		if (creator?.role === "ADMIN") {
			const task = new Task(parsedBody);
			try {
				await task.save();
				res.json({ ...successResponse, data: "task assigned" });
			} catch (err: unknown) {
				console.log(err);
				res.json({ ...failureResponse, data: "Task creation failed due to validation error" });
			}
		} else {
			res.json({ ...failureResponse, data: "task was not assigned because you are not an admin" });
		}
	} else {
		res.json({ ...failureResponse, data: "task was not assigned due to service failure" });
	}
}
