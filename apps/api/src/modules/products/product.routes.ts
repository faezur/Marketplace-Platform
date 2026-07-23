import { Router } from "express";

import { ProductController } from "./product.controller.js";

const router = Router();

const productController = new ProductController();

router.post(
  "/",
  productController.createProduct.bind(productController)
);

router.get(
  "/",
  productController.getAllProducts.bind(productController)
);

router.get(
  "/:id",
  productController.getProductById.bind(productController)
);

router.put(
  "/:id",
  productController.updateProduct.bind(productController)
);

router.delete(
  "/:id",
  productController.deleteProduct.bind(productController)
);

router.patch(
  "/:id/approve",
  productController.approveProduct.bind(productController)
);

router.patch(
  "/:id/reject",
  productController.rejectProduct.bind(productController)
);

export default router;