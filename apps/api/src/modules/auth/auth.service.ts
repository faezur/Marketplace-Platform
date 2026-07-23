import bcrypt from "bcrypt";
import { MerchantStatus } from "@prisma/client";

import { AuthRepository } from "./auth.repository.js";
import {
  LoginDto,
  RegisterMerchantDto,
  AuthResponse,
  AuthTokens,
  RegisterMerchantResponse,
} from "./auth.types.js";

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../../utils/jwt.js";

export class AuthService {
  constructor(
    private readonly authRepository = new AuthRepository()
  ) {}


async registerMerchant(data: RegisterMerchantDto): Promise<RegisterMerchantResponse> {
  // 1. Check existing user
  const existingUser = await this.authRepository.findUserByEmail(data.email);

  if (existingUser) {
    throw new Error("Email already registered.");
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(data.password, 12);

  // 3. Create merchant
  const merchant = await this.authRepository.createMerchant(
    data,
    hashedPassword
  );

  return {
    success: true,
    message:
      "Registration submitted successfully. Please wait for admin approval.",

    merchant: {
      id: merchant.merchant?.id,
      fullName: merchant.fullName,
      email: merchant.email,
      status: merchant.merchant?.status,
    },
  };
}


async login(data: LoginDto): Promise<AuthResponse> {
  console.log("Request:", data);

  const user = await this.authRepository.findUserByEmail(data.email);

  console.log("User:", user);

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isPasswordValid = await bcrypt.compare(
    data.password,
    user.password
  );

  console.log("Password Match:", isPasswordValid);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password.");
  }

// Merchant approval check
  if (
    user.role === "MERCHANT" &&
    user.merchant?.status !== MerchantStatus.APPROVED
  ) {
    throw new Error(
      "Your merchant account is not approved yet."
    );
  }
  const payload = {
    userId: user.id,
    role: user.role,
  };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);
  await this.authRepository.updateRefreshToken(
    user.id,
    refreshToken
  );
  return {
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
    tokens: {
      accessToken,
      refreshToken,
    },
  };
}


async refresh(refreshToken: string): Promise<AuthTokens> {
  const payload = verifyRefreshToken(refreshToken);
  const user = await this.authRepository.findUserById(payload.userId);
  if (!user) {
    throw new Error("User not found.");
  }
  if (user.refreshToken !== refreshToken) {
    throw new Error("Invalid refresh token.");
  }
  const newPayload = {
    userId: user.id,
    role: user.role,
  };
  const newAccessToken = generateAccessToken(newPayload);
  const newRefreshToken = generateRefreshToken(newPayload);
  await this.authRepository.updateRefreshToken(
    user.id,
    newRefreshToken
  );
  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  };
}


  async logout(userId: string): Promise<void> {
    await this.authRepository.updateRefreshToken(userId, null);
  }
}

