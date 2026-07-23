import { Request, Response, NextFunction } from "express";

import { ProductService } from "./product.service.js";

import { ProductParams } from "./product.types.js";

export class ProductController {
  constructor(
    private readonly productService = new ProductService()
  ) {}

  async createProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const product = await this.productService.createProduct(req.body);

      res.status(201).json({
        success: true,
        message: "Product created successfully.",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const products = await this.productService.getAllProducts();

      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProductById(
    req: Request<ProductParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const product = await this.productService.getProductById(
        req.params.id
      );

      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(
    req: Request<ProductParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const product = await this.productService.updateProduct(
        req.params.id,
        req.body
      );

      res.status(200).json({
        success: true,
        message: "Product updated successfully.",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(
    req: Request<ProductParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      await this.productService.deleteProduct(req.params.id);

      res.status(200).json({
        success: true,
        message: "Product deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }

  async approveProduct(
    req: Request<ProductParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const product = await this.productService.approveProduct(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message: "Product approved successfully.",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async rejectProduct(
    req: Request<ProductParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const product = await this.productService.rejectProduct(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message: "Product rejected successfully.",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }
}