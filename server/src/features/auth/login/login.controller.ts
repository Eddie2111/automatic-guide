import argon2 from "argon2";
import type { Response } from "express";
import jwt from "jsonwebtoken";

import { User } from "../../../schema/database/user.schema";
import type { UserInterface } from "../../../schema/database/user.schema";
import { userPropsLoginSchema } from "../../../schema/validation/user.validation";
import { idGenerate } from "../../../utils/IDGenerator";

export default async function LoginUser(data: Partial<UserInterface | null>, res: Response) {
	try {
		const query = User.where({ email: data?.email ?? "" });
		const response: Partial<UserInterface | null> = await query.findOne();
		if (!response) {
			return res.json({
				data: {},
				message: "No User Found",
				status: 400,
			});
		}
		const passwordMatch = await argon2.verify(response?.password ?? "", data?.password ?? "");
		if (passwordMatch) {
			const payload = {
				serial: response?.serial,
				email: response?.email,
				role: response?.role,
			};
			const secret = (process.env.SECRET as string) ?? "secret";
			const token: string = jwt.sign(payload, secret);
			res.cookie("user", token, {
				httpOnly: true,
				secure: true,
			});
			res.json({
				data: payload,
				message: "login success",
				status: 200,
			});
		} else {
			res.json({
				data: {},
				message: "login failed",
				status: 400,
			});
		}
	} catch (err: unknown) {
		console.log(err);
		return false;
	}
}
//
