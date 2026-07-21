import { Request, Response, NextFunction } from "express";

import { AuthService } from "./auth.service.js";
const authService = new AuthService();
import {
  registerMerchantSchema,
  loginSchema,
} from "./auth.validation.js";

  class AuthController {
  async registerMerchant(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = registerMerchantSchema.parse(req.body);

      const result = await authService.registerMerchant(data);

      return res.status(201).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }


    async login(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = loginSchema.parse(req.body);

      const result = await authService.login(data);

      return res.status(200).json({
        success: true,
        message: "Login successful.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

    async refresh(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { refreshToken } = req.body;

      const tokens =
        await authService.refresh(refreshToken);

      return res.status(200).json({
        success: true,
        data: tokens,
      });
    } catch (error) {
      next(error);
    }
  }

    async logout(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = req.body;

      await authService.logout(userId);

      return res.status(200).json({
        success: true,
        message: "Logged out successfully.",
      });
    } catch (error) {
      next(error);
    }
  }

    async me(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      return res.status(501).json({
        success: false,
        message: "Not implemented yet.",
      });
    } catch (error) {
      next(error);
    }
  }
}


export const authController = new AuthController();