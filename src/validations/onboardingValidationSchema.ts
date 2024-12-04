import { z } from "zod";

export const questionFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters long." })
    .max(50, { message: "Full name cannot exceed 50 characters." }),
  groupName: z
    .string()
    .trim()
    .min(2, { message: "Group name must be at least 2 characters long." })
    .max(50, { message: "Group name cannot exceed 50 characters." }),
  contactNumber: z
    .string()
    .trim()
    .regex(/^\+?[0-9]{7,15}$/, {
      message:
        "Contact number must be between 7 and 15 digits and can include a leading '+'.",
    }),
});
