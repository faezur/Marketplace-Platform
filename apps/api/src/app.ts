import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import type { Env } from './config/env.js'
import { healthRouter } from './modules/health/health.routes.js'
import { errorHandler } from './middleware/error-handler.js'
import authRoutes from "./modules/auth/auth.routes.js";
import merchantRoutes from "./modules/merchants/merchant.routes.js";
import categoryRoutes from "./modules/categories/category.routes.js";
import productRoutes from "./modules/products/product.routes.js";

export function createApp(env: Env) {
  const app = express()

  app.use(helmet())
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true,
    }),
  )
  app.use(express.json())
  

  app.get('/', (_req, res) => {
    res.json({
      success: true,
      data: {
        name: 'Marketplace Platform API',
        version: '0.1.0',
      },
    })
  })
  app.use("/api/v1/health", healthRouter);
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/merchants", merchantRoutes);
  app.use("/api/v1/categories", categoryRoutes);
  app.use("/api/v1/products", productRoutes);

  app.use(errorHandler);
  return app
}
