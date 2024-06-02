import argon2 from "argon2";

import { User } from "../../../schema/database/user.schema";
import { UserInterface } from "../../../schema/database/user.schema";
import { userPropsSchema } from "../../../schema/validation/user.validation";
import { idGenerate } from "../../../utils/IDGenerator";

export default async function SignupUser(data: Partial<UserInterface | null>) {
	try {
		const passwordhash = await argon2.hash(data?.password ?? "");
		console.log(data);
		const user = new User({
			serial: data?.serial ?? "",
			firstName: data?.firstName ?? "",
			lastName: data?.lastName ?? "",
			email: data?.email ?? "",
			password: passwordhash,
			role: data?.role ?? "USER",
		});
		await user.save();
		console.log(" User ", data?.firstName, data?.lastName, "with email", data?.email, "created account successfully");
		return true;
	} catch (err: unknown) {
		console.log(err);
		return false;
	}

	//
}
