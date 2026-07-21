import { z } from "zod";

export const rejectMerchantSchema = z.object({
  reason: z
    .string()
    .trim()
    .min(5, "Reason is required")
    .max(300),
});