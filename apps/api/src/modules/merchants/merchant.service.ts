import { MerchantStatus } from "@prisma/client";
import { MerchantRepository } from "./merchant.repository.js";

export class MerchantService {
  constructor(
    private readonly merchantRepository = new MerchantRepository()
  ) {}

    async getPendingMerchants() {
    return await this.merchantRepository.findPendingMerchants();
    }

    async getMerchantById(merchantId: string) {
    const merchant =
        await this.merchantRepository.findMerchantById(merchantId);

    if (!merchant) {
        throw new Error("Merchant not found.");
    }

    return merchant;
    }

    
    async approveMerchant(
    merchantId: string,
    approvedBy: string
    ) {
    const merchant =
        await this.merchantRepository.findMerchantById(merchantId);

    if (!merchant) {
        throw new Error("Merchant not found.");
    }

    if (merchant.status === MerchantStatus.APPROVED) {
        throw new Error("Merchant already approved.");
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
    const merchant =
        await this.merchantRepository.findMerchantById(merchantId);

    if (!merchant) {
        throw new Error("Merchant not found.");
    }

    if (merchant.status === MerchantStatus.REJECTED) {
        throw new Error("Merchant already rejected.");
    }

    return await this.merchantRepository.rejectMerchant(
        merchantId,
        rejectedBy,
        reason
    );
    }
}