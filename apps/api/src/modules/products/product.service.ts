import { ProductStatus } from "@prisma/client";

import { AppError } from "../../shared/errors/app-error.js";

import { MerchantRepository } from "../merchants/merchant.repository.js";
import { CategoryRepository } from "../categories/category.repository.js";

import { ProductRepository } from "./product.repository.js";

import {
  CreateProductDto,
  UpdateProductDto,
} from "./product.types.js";

export class ProductService {
  constructor(
    private readonly productRepository = new ProductRepository(),
    private readonly merchantRepository = new MerchantRepository(),
    private readonly categoryRepository = new CategoryRepository()
  ) {}

  async createProduct(data: CreateProductDto) {
    const merchant = await this.merchantRepository.findMerchantById(
      data.merchantId
    );

    if (!merchant) {
      throw new AppError("Merchant not found.", 404);
    }

    if (merchant.status !== "APPROVED") {
      throw new AppError("Merchant is not approved.", 403);
    }

    const category = await this.categoryRepository.findById(
      data.categoryId
    );

    if (!category) {
      throw new AppError("Category not found.", 404);
    }

    if (!category.isActive) {
      throw new AppError("Category is inactive.", 400);
    }

    const existingSlug =
      await this.productRepository.findBySlug(data.slug);

    if (existingSlug) {
      throw new AppError("Product slug already exists.", 409);
    }

    if (data.sku) {
      const existingSku =
        await this.productRepository.findBySku(data.sku);

      if (existingSku) {
        throw new AppError("SKU already exists.", 409);
      }
    }

    return this.productRepository.create(data);
  }

  async getAllProducts() {
    return this.productRepository.findAll();
  }

  async getProductById(id: string) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found.", 404);
    }

    return product;
  }

  async updateProduct(
    id: string,
    data: UpdateProductDto
  ) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found.", 404);
    }

    if (data.slug) {
      const existingSlug =
        await this.productRepository.findBySlug(data.slug);

      if (existingSlug && existingSlug.id !== id) {
        throw new AppError("Product slug already exists.", 409);
      }
    }

    if (data.sku) {
      const existingSku =
        await this.productRepository.findBySku(data.sku);

      if (existingSku && existingSku.id !== id) {
        throw new AppError("SKU already exists.", 409);
      }
    }

    if (data.categoryId) {
      const category =
        await this.categoryRepository.findById(
          data.categoryId
        );

      if (!category) {
        throw new AppError("Category not found.", 404);
      }

      if (!category.isActive) {
        throw new AppError("Category is inactive.", 400);
      }
    }

    return this.productRepository.update(id, data);
  }

  async deleteProduct(id: string) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found.", 404);
    }

    return this.productRepository.delete(id);
  }

  async approveProduct(id: string) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found.", 404);
    }

    return this.productRepository.update(id, {
      isPublished: true,
      status: ProductStatus.APPROVED,
    });
  }

  async rejectProduct(id: string) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found.", 404);
    }

    return this.productRepository.update(id, {
      isPublished: false,
      status: ProductStatus.REJECTED,
    });
  }
}