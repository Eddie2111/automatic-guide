import mongoose, { Document, Schema } from "mongoose";

export interface TaskInterface extends Document {
	serial: string;
	title: string;
	body?: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	status?: "Active" | "Inactive" | "Done" | "Removed";
	assignedBy?: string;
	assignedTo?: string[];
}

const taskSchema = new Schema<TaskInterface>({
	serial: {
		type: String,
		unique: true,
		required: true,
	},
	title: {
		type: String,
		maxlength: 32,
		required: true,
	},
	description: {
		type: String,
		maxlength: 1024,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
	assignedBy: {
		type: String,
		default: null,
	},
	assignedTo: {
		type: [String],
		default: [],
	},
	status: {
		type: String,
		enum: ["Active", "Inactive", "Done", "Removed"],
		default: "Active",
		required: true,
	},
});

export const Task = mongoose.model<TaskInterface>("tasks", taskSchema);
