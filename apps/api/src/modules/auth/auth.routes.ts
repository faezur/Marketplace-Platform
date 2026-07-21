import { Router } from "express";
import { authController } from "./auth.controller.js";

const router = Router();

router.post("/register", authController.registerMerchant);

router.post("/login", authController.login);

router.post("/refresh", authController.refresh);

router.post("/logout", authController.logout);

router.get("/me", authController.me);

export default router;