import { UserRole } from "@prisma/client";
import { prisma } from "../../config/database.js";
import { RegisterMerchantDto } from "./auth.types.js";


export class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      include: {
        merchant: true,
      },
    });
  }

  async createMerchant(data: RegisterMerchantDto, hashedPassword: string) {
    return prisma.user.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        password: hashedPassword,
        phone: data.phone,
        role: UserRole.MERCHANT,

        merchant: {
          create: {
            country: data.country,
            governmentIdType: data.governmentIdType,
            governmentId: data.governmentId,
            ssn: data.ssn,
          },
        },
      },
      include: {
        merchant: true,
      },
    });
  }

  async updateRefreshToken(userId: string, refreshToken: string | null) {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken,
      },
    });
  }

  async findMerchantByUserId(userId: string) {
    return prisma.merchant.findUnique({
      where: {
        userId,
      },
    });
  }

  async findUserById(userId: string) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      merchant: true,
    },
  });
}
}

