import { Prisma, ProductStatus, Currency } from "@prisma/client";

export interface CreateProductDto {
  merchantId: string;

  categoryId: string;

  name: string;

  slug: string;

  description?: string;

  sku?: string;

  brand?: string;

  price: number;

  compareAtPrice?: number;

  costPrice?: number;

  currency?: Currency;

  stock?: number;

  minOrderQty?: number;

  maxOrderQty?: number;

  weight?: number;

  length?: number;

  width?: number;

  height?: number;

  manufacturer?: string;

  countryOfOrigin?: string;

  warranty?: string;

  attributes?: Prisma.InputJsonValue;

  isFeatured?: boolean;

  isPublished?: boolean;
}

export interface UpdateProductDto {
  merchantId?: string;

  categoryId?: string;

  name?: string;

  slug?: string;

  description?: string;

  sku?: string;

  brand?: string;

  price?: number;

  compareAtPrice?: number;

  costPrice?: number;

  currency?: string;

  stock?: number;

  minOrderQty?: number;

  maxOrderQty?: number;

  weight?: number;

  length?: number;

  width?: number;

  height?: number;

  manufacturer?: string;

  countryOfOrigin?: string;

  warranty?: string;

  attributes?: Prisma.InputJsonValue;

  isFeatured?: boolean;

  isPublished?: boolean;

  status?: ProductStatus;
}

export interface ProductParams {
  id: string;
}