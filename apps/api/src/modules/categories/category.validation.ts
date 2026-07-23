import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Category name must be at least 2 characters.")
    .max(100, "Category name cannot exceed 100 characters."),

  slug: z
    .string()
    .trim()
    .min(2, "Slug must be at least 2 characters.")
    .max(100, "Slug cannot exceed 100 characters.")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers, and hyphens."
    ),

  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters.")
    .optional(),

  image: z
    .string()
    .url("Image must be a valid URL.")
    .optional(),

  parentId: z
    .string()
    .cuid("Invalid parent category ID.")
    .nullable()
    .optional(),
});

export const updateCategorySchema = createCategorySchema.partial();

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;