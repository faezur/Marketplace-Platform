import { Request, Response, NextFunction } from "express";

import { CategoryService } from "./category.service.js";
import { CategoryParams } from "./category.types.js";

export class CategoryController {
  constructor(
    private readonly categoryService = new CategoryService()
  ) {}

  async createCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const category = await this.categoryService.createCategory(req.body);

      res.status(201).json({
        success: true,
        message: "Category created successfully.",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllCategories(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const categories =
        await this.categoryService.getAllCategories();

      res.status(200).json({
        success: true,
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  }

  async getCategoryById(
    req: Request<CategoryParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const category =
        await this.categoryService.getCategoryById(req.params.id);

      res.status(200).json({
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(
    req: Request<CategoryParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const category =
        await this.categoryService.updateCategory(
          req.params.id,
          req.body
        );

      res.status(200).json({
        success: true,
        message: "Category updated successfully.",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(
    req: Request<CategoryParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      await this.categoryService.deleteCategory(req.params.id);

      res.status(200).json({
        success: true,
        message: "Category deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}