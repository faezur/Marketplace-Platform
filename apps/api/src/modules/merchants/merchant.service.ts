import { MerchantStatus } from "@prisma/client";
import { MerchantRepository } from "./merchant.repository.js";
import { AppError } from "../../shared/errors/app-error.js";

export class MerchantService {
  constructor(
    private readonly merchantRepository = new MerchantRepository()
  ) {}

  async getPendingMerchants() {
    return await this.merchantRepository.findPendingMerchants();
  }

  async getMerchantById(merchantId: string) {
    const merchant = await this.merchantRepository.findMerchantById(
      merchantId
    );

    if (!merchant) {
      throw new AppError("Merchant not found", 404);
    }

    return merchant;
  }

  async approveMerchant(
    merchantId: string,
    approvedBy: string
  ) {
    const merchant = await this.getMerchantById(merchantId);

    if (merchant.status === MerchantStatus.APPROVED) {
      throw new AppError("Merchant is already approved", 409);
    }

    return await this.merchantRepository.approveMerchant(
      merchantId,
      approvedBy
    );
  }

  async rejectMerchant(
    merchantId: string,
    rejectedBy: string,
    reason: string
  ) {
    const merchant = await this.getMerchantById(merchantId);

    if (merchant.status === MerchantStatus.REJECTED) {
      throw new AppError("Merchant is already rejected", 409);
    }

    return await this.merchantRepository.rejectMerchant(
      merchantId,
      rejectedBy,
      reason
    );
  }
}