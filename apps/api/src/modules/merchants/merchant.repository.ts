import { MerchantStatus } from "@prisma/client";
import { prisma } from "../../config/database.js";

export class MerchantRepository {
  async findPendingMerchants() {
    return prisma.merchant.findMany({
      where: {
        status: MerchantStatus.PENDING,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findMerchantById(merchantId: string) {
    return prisma.merchant.findUnique({
      where: {
        id: merchantId,
      },
      include: {
        user: true,
      },
    });
  }

  async approveMerchant(merchantId: string, approvedBy: string) {
    return prisma.merchant.update({
      where: {
        id: merchantId,
      },
      data: {
        status: MerchantStatus.APPROVED,
        approvedAt: new Date(),
        approvedBy,
      },
      include: {
        user: true,
      },
    });
  }

  async rejectMerchant(
    merchantId: string,
    rejectedBy: string,
    reason: string
  ) {
    return prisma.merchant.update({
      where: {
        id: merchantId,
      },
      data: {
        status: MerchantStatus.REJECTED,
        approvedBy: rejectedBy,
        rejectionReason: reason,
      },
      include: {
        user: true,
      },
    });
  }
}