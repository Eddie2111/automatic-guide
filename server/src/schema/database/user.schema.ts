import mongoose, { Document, Schema } from "mongoose";

export interface UserInterface extends Document {
	id: number;
	serial: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role: "ADMIN" | "USER";
}

const userSchema = new Schema<UserInterface>({
	serial: {
		type: String,
		unique: true,
	},
	firstName: {
		type: String,
		maxlength: 16,
	},
	lastName: {
		type: String,
		maxlength: 16,
	},
	email: {
		type: String,
		maxlength: 35,
		unique: true,
	},
	password: {
		type: String,
		maxlength: 120,
	},
	role: {
		type: String,
		required: true,
	},
});

export const User = mongoose.model<UserInterface>("Users", userSchema);
