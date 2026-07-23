import { z } from "zod";

export const createProductSchema = z.object({
  merchantId: z.string().cuid(),

  categoryId: z.string().cuid(),

  name: z
    .string()
    .trim()
    .min(2, "Product name must be at least 2 characters.")
    .max(255),

  slug: z
    .string()
    .trim()
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Invalid slug format."
    ),

  description: z.string().optional(),

  sku: z.string().trim().optional(),

  brand: z.string().trim().optional(),

  price: z.number().positive(),

  compareAtPrice: z.number().positive().optional(),

  costPrice: z.number().positive().optional(),

  currency: z.string().trim().default("INR"),

  stock: z.number().int().min(0).default(0),

  minOrderQty: z.number().int().min(1).default(1),

  maxOrderQty: z.number().int().positive().optional(),

  weight: z.number().positive().optional(),

  length: z.number().positive().optional(),

  width: z.number().positive().optional(),

  height: z.number().positive().optional(),

  manufacturer: z.string().optional(),

  countryOfOrigin: z.string().optional(),

  warranty: z.string().optional(),

  attributes: z.record(z.string(), z.unknown()).optional(),

  isFeatured: z.boolean().optional(),

  isPublished: z.boolean().optional(),
});

export const updateProductSchema =
  createProductSchema.partial();