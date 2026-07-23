export interface CreateCategoryDto {
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string | null;
}

export interface UpdateCategoryDto {
  name?: string;
  slug?: string;
  description?: string;
  image?: string;
  parentId?: string | null;
  isActive?: boolean;
}

export interface CategoryParams {
  id: string;
}