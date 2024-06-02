import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

export const taskFormSchema = z.object({
  title: z.string().max(32).min(1),
  description: z.string().max(1024).min(5),
  assignedTo: z.string().max(128).min(8).optional(),
  status: z.enum(["Active", "Inactive", "Done", "Removed"]),
});
export type taskFormProps = z.infer<typeof taskFormSchema>;
