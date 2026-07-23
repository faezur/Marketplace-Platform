import { Prisma, Currency } from "@prisma/client";
import { prisma } from "../../config/database.js";
import { CreateProductDto, UpdateProductDto} from "./product.types.js";

export class ProductRepository {
  async create(data: CreateProductDto) {
  const productData: Prisma.ProductCreateInput = {
    merchant: {
      connect: {
        id: data.merchantId,
      },
    },

    category: {
      connect: {
        id: data.categoryId,
      },
    },

    name: data.name,
    slug: data.slug,

    description: data.description ?? null,

    sku: data.sku ?? null,

    brand: data.brand ?? null,

    price: data.price,

    compareAtPrice: data.compareAtPrice ?? null,
    costPrice: data.costPrice ?? null,

    currency: data.currency ?? Currency.USDT,

    stock: data.stock ?? 0,

    minOrderQty: data.minOrderQty ?? 1,
    maxOrderQty: data.maxOrderQty ?? null,

    weight: data.weight ?? null,
    length: data.length ?? null,
    width: data.width ?? null,
    height: data.height ?? null,

    manufacturer: data.manufacturer ?? null,
    countryOfOrigin: data.countryOfOrigin ?? null,
    warranty: data.warranty ?? null,

    attributes: data.attributes ?? Prisma.JsonNull,

    isFeatured: data.isFeatured ?? false,
    isPublished: data.isPublished ?? false,
  };

  return prisma.product.create({
    data: productData,
  });
}

  async findAll() {
    return prisma.product.findMany({
      include: {
        merchant: true,
        category: true,
        images: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: string) {
    return prisma.product.findUnique({
      where: { id },
      include: {
        merchant: true,
        category: true,
        images: true,
      },
    });
  }

  async findBySlug(slug: string) {
    return prisma.product.findUnique({
      where: { slug },
    });
  }

  async findBySku(sku: string) {
    return prisma.product.findUnique({
      where: { sku },
    });
  }

  async update(id: string, data: UpdateProductDto) {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.product.delete({
      where: { id },
    });
  }
}