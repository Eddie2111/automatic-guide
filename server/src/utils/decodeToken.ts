import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export interface jwtProps {
	serial: string | null;
	email: string | null;
	role: "ADMIN" | "USER" | null;
	iat: number | null;
	exp: number | null;
}

export async function decodeToken(token: string): Promise<jwtProps> {
	try {
		const secret = (process.env.SECRET as string) ?? "";
		const response = (await jwt.verify(token ?? "", secret)) as jwtProps;
		return response;
	} catch (err: unknown) {
		console.log(err);
		return {
			serial: null,
			email: null,
			role: null,
			iat: null,
			exp: null,
		};
	}
}
