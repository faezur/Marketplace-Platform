import { Router } from "express";
import { MerchantController } from "./merchant.controller.js";

const router = Router();
const merchantController = new MerchantController();

router.get(
  "/pending",
  merchantController.getPendingMerchants.bind(merchantController)
);

router.get(
  "/:id",
  merchantController.getMerchantById.bind(merchantController)
);

router.patch(
  "/:id/approve",
  merchantController.approveMerchant.bind(merchantController)
);

router.patch(
  "/:id/reject",
  merchantController.rejectMerchant.bind(merchantController)
);

export default router;