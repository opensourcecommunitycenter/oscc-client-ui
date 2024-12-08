import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const questionFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters long." })
    .max(50, { message: "Full name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Full name can only contain letters and spaces.",
    }),

  groupName: z
    .string()
    .trim()
    .min(2, { message: "Group name must be at least 2 characters long." })
    .max(50, { message: "Group name cannot exceed 50 characters." })
    .optional(),

  contactNumber: z.object({
    countryCode: z.string().min(1, { message: "Country code is required." }),
    number: z.string().refine((value) => isValidPhoneNumber(value), {
      message: "Invalid phone number.",
    }),
  }),

  location: z.object({
    country: z.string().min(1, { message: "Country is required." }),
    state: z.string().min(1, { message: "State is required." }),
    city: z.string().min(1, { message: "City is required." }),
  }),

  EduBackground: z
    .string()
    .trim()
    .min(10, {
      message: "description must be at least 10 characters long.",
    })
    .max(500, {
      message: "description cannot exceed 500 characters.",
    }),

  uploadCV: z
    .instanceof(File)
    .refine((file) => file.size <= 100 * 1024 * 1024, {
      message: "CV file size cannot exceed 100 MB.",
    }),

  visionTitle: z
    .string()
    .trim()
    .min(5, { message: "Vision title must be at least 5 characters long." })
    .max(100, { message: "Vision title cannot exceed 100 characters." }),

  visionStatement: z
    .instanceof(File)
    .refine((file) => file.size <= 100 * 1024 * 1024, {
      message: "Vision statement file size cannot exceed 100 MB.",
    }),

  dedicationTime: z
    .string()
    .trim()
    .min(1, { message: "Dedication time is required." })
    .regex(/^\d+$/, {
      message: "Dedication time must be a valid number (in hours).",
    }),

  ska: z.object({
    skills: z
      .string()
      .trim()
      .min(1, { message: "At least one skill is required." }),
    knowledge: z
      .string()
      .trim()
      .min(1, { message: "At least one area of knowledge is required." }),
    attributes: z
      .string()
      .trim()
      .min(1, { message: "At least one attribute is required." }),
  }),

  rizq: z
    .string()
    .trim()
    .min(10, {
      message: "Rizq description must be at least 10 characters long.",
    })
    .max(500, { message: "Rizq description cannot exceed 500 characters." }),

  works: z
    .string()
    .trim()
    .min(10, {
      message: "Works description must be at least 10 characters long.",
    })
    .max(500, { message: "Works description cannot exceed 500 characters." }),

  // works: z
  //   .array(
  //     z.object({
  //       projectName: z
  //         .string()
  //         .trim()
  //         .min(2, {
  //           message: "Project name must be at least 2 characters long.",
  //         })
  //         .max(100, { message: "Project name cannot exceed 100 characters." }),
  //       file: z
  //         .instanceof(File)
  //         .optional()
  //         .refine((file) => file.size <= 100 * 1024 * 1024, {
  //           message: "Work file size cannot exceed 100 MB.",
  //         }),
  //     }),
  //   )
  //   .optional(),
});
