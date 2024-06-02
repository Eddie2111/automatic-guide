import express, { Request, Response } from "express";

import { User } from "../../schema/database/user.schema";
import { ErrorHandler } from "../../templates/error";

const router = express.Router();

router.route("/").get(async (req: Request, res: Response) => {
	try {
		const id = req.query.id || "";
		const user = await User.findOne({ serial: id ?? "" });

		if (user) {
			res.json({ status: 200, data: user });
		} else {
			res.json({ status: 404, message: "No users found for the requested id" });
		}
	} catch (err: unknown) {
		ErrorHandler(err, res);
	}
});

module.exports = router;
