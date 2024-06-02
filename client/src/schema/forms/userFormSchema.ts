import { z } from "zod";

export const userFormSchema = z.object({
  email: z
    .string()
    .min(8, {
      message: "Email address too short",
    })
    .max(35, {
      message: "Email address too long.",
    }),
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters.",
    })
    .max(32, {
      message: "First name cannot be more than 32 characters.",
    })
    .optional(),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .max(32, {
      message: "Last name cannot be more than 32 characters.",
    })
    .optional(),
  password: z
    .string()
    .min(6, {
      message: "Password has to be more than 6 characters.",
    })
    .max(18, {
      message: "Password has to be less than 18 characters.",
    }),
});
export type UserFormSchemaProps = z.infer<typeof formSchema>;
