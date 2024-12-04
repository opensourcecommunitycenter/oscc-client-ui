import { z } from "zod";

export const loginFormSchema = z.object({
    email: z
        .string()
        .email("Invalid email format")
        .max(50, { message: "Email cannot exceed 50 characters." }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(50, { message: "Password cannot exceed 50 characters" }),
});
