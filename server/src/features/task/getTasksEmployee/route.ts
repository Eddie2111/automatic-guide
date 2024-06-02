import express, { Request, Response } from "express";

import { Task } from "../../../schema/database/task.schema";
import { ErrorHandler } from "../../../templates/error";
import { decodeToken } from "../../../utils/decodeToken";

const router = express.Router();

router.route("/").get(async (req: Request, res: Response) => {
	console.log("ping!");
	try {
		const userID = (req.cookies.user as string) ?? "";
		if (!userID) {
			return res.status(401).json({ status: 401, message: "Unauthorized" });
		}
		const decoded = await decodeToken(userID);
		if (!decoded || !decoded.serial) {
			return res.status(401).json({ status: 401, message: "Invalid user token" });
		}
		const page = parseInt(req.query.page as string) || 1;
		if (page < 1) {
			return res.status(400).json({ status: 400, message: "Invalid page number" });
		}
		const limit = 10;
		const startIndex = (page - 1) * limit;
		console.log(decoded);
		const tasks = await Task.find({ assignedTo: decoded?.serial ?? "" })
			.skip(startIndex)
			.limit(limit);
		if (tasks.length > 0) {
			res.json({ status: 200, data: tasks });
		} else {
			res.json({ status: 404, message: "No tasks found for the requested page" });
		}
	} catch (err: unknown) {
		ErrorHandler(err, res);
	}
});

module.exports = router;
