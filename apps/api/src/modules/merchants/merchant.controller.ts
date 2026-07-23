import { Request, Response, NextFunction } from "express";
import { MerchantService } from "./merchant.service.js";
import { rejectMerchantSchema } from "./merchant.validation.js";


type MerchantParams = {
  id: string;
};

const merchantService = new MerchantService();

export class MerchantController {
  async getPendingMerchants(
    req: Request<MerchantParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const merchants = await merchantService.getPendingMerchants();

      res.status(200).json({
        success: true,
        data: merchants,
      });
    } catch (error) {
      next(error);
    }
  }

  async getMerchantById(
    req: Request<MerchantParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const merchant = await merchantService.getMerchantById(req.params.id);

      res.status(200).json({
        success: true,
        data: merchant,
      });
    } catch (error) {
      next(error);
    }
  }

  async approveMerchant(
    req: Request<MerchantParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      // TODO: JWT middleware ke baad req.user.userId use karenge
      const approvedBy = "ADMIN";

      const merchant = await merchantService.approveMerchant(
        req.params.id,
        approvedBy
      );

      res.status(200).json({
        success: true,
        message: "Merchant approved successfully",
        data: merchant,
      });
    } catch (error) {
      next(error);
    }
  }

  async rejectMerchant(
    req: Request<MerchantParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { reason } = rejectMerchantSchema.parse(req.body);

      // TODO: JWT middleware ke baad req.user.userId use karenge
      const rejectedBy = "ADMIN";

      const merchant = await merchantService.rejectMerchant(
        req.params.id,
        rejectedBy,
        reason
      );

      res.status(200).json({
        success: true,
        message: "Merchant rejected successfully",
        data: merchant,
      });
    } catch (error) {
      next(error);
    }
  }
}