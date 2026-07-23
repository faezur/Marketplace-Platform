import { CategoryRepository } from "./category.repository.js";
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from "./category.types.js";

import { AppError } from "../../shared/errors/app-error.js";

export class CategoryService {
  constructor(
    private readonly categoryRepository = new CategoryRepository()
  ) {}

  async createCategory(data: CreateCategoryDto) {
    // Duplicate slug check
    const existingCategory =
      await this.categoryRepository.findBySlug(data.slug);

    if (existingCategory) {
      throw new AppError("Category slug already exists." , 409);
    }

    // Parent category validation
    if (data.parentId) {
      const parentCategory =
        await this.categoryRepository.findById(data.parentId);

      if (!parentCategory) {
        throw new AppError("Parent category not found." , 404);
      }
    }

    return this.categoryRepository.create(data);
  }

  async getAllCategories() {
    return this.categoryRepository.findAll();
  }

  async getCategoryById(id: string) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError("Category not found.", 404);
    }

    return category;
  }

  async updateCategory(
    id: string,
    data: UpdateCategoryDto
  ) {
    await this.getCategoryById(id);

    if (data.slug) {
      const existingCategory =
        await this.categoryRepository.findBySlug(data.slug);

      if (
        existingCategory &&
        existingCategory.id !== id
      ) {
        throw new AppError("Category slug already exists.", 409);
      }
    }

    if (data.parentId) {
      if (data.parentId === id) {
        throw new AppError("Category cannot be its own parent.", 400);
      }

      const parentCategory =
        await this.categoryRepository.findById(data.parentId);

      if (!parentCategory) {
        throw new AppError("Parent category not found.", 404);
      }
    }

    return this.categoryRepository.update(id, data);
  }

  async deleteCategory(id: string) {
    await this.getCategoryById(id);

    return this.categoryRepository.delete(id);
  }
}