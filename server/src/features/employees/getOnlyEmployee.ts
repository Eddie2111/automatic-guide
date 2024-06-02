import express, { Request, Response } from "express";

import { User } from "../../schema/database/user.schema";
import { ErrorHandler } from "../../templates/error";

const router = express.Router();

router.route("/").get(async (req: Request, res: Response) => {
	try {
		const page = parseInt(req.query.page as string) || 1;
		const limit = 10;
		const startIndex = (page - 1) * limit;
		const tasks = await User.find({ role: "USER" }).skip(startIndex).limit(limit);

		if (tasks.length > 0) {
			res.json({ status: 200, data: tasks });
		} else {
			res.json({ status: 404, message: "No users found for the requested page" });
		}
	} catch (err: unknown) {
		ErrorHandler(err, res);
	}
});

module.exports = router;
