import { z } from "zod";

export const registerMerchantSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Full name must be at least 3 characters")
      .max(100),

    email: z
      .string()
      .trim()
      .email("Invalid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100),

    phone: z
      .string()
      .trim()
      .min(8)
      .max(20),

    country: z
      .string()
      .trim()
      .min(2),

    governmentIdType: z
      .string()
      .trim()
      .min(2),

    governmentId: z
      .string()
      .trim()
      .min(4),

    ssn: z
      .string()
      .trim()
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.country.toUpperCase() === "US" &&
      (!data.ssn || data.ssn.trim() === "")
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["ssn"],
        message: "SSN is required for US merchants.",
      });
    }
  });

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  password: z
    .string()
    .min(1, "Password is required"),
});