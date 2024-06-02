import { z } from "zod";

export const TaskSchema = z.object({
	serial: z.string(),
	title: z.string().max(32),
	description: z.string().max(1024),
	createdAt: z.string().optional(),
	updatedAt: z.string().optional(),
	assignedBy: z.string().nullable().optional(),
	assignedTo: z.array(z.string()).optional(),
	status: z.enum(["Active", "Inactive", "Done", "Removed"]).optional(),
});

export type TaskProps = z.infer<typeof TaskSchema>;
