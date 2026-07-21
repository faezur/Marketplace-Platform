import type { UserRole } from "@prisma/client";

export interface RegisterMerchantDto {
  fullName: string;
  email: string;
  password: string;

  phone: string;

  country: string;

  governmentIdType: string;

  governmentId: string;

  ssn?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface JwtPayload {
  userId: string;
  role: UserRole;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  user: {
    id: string;
    fullName: string;
    email: string;
    role: UserRole;
  };

  tokens: AuthTokens;
}

export interface RegisterMerchantResponse {
  success: boolean;
  message: string;

  merchant: {
    id?: string;
    fullName: string;
    email: string;
    status?: string;
  };
}