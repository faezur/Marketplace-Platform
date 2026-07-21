import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import { JwtPayload } from "../modules/auth/auth.types.js";

/**
 * Read required environment variables.
 * Throws an error if the variable is missing.
 */
function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable "${name}" is missing.`);
  }

  return value;
}

/**
 * JWT Secrets
 */
const ACCESS_SECRET: Secret = getEnv("JWT_ACCESS_SECRET");
const REFRESH_SECRET: Secret = getEnv("JWT_REFRESH_SECRET");

/**
 * Token Expiry
 */
const ACCESS_TOKEN_EXPIRES_IN =
  (process.env.JWT_ACCESS_EXPIRES_IN ?? "15m") as SignOptions["expiresIn"];

const REFRESH_TOKEN_EXPIRES_IN =
  (process.env.JWT_REFRESH_EXPIRES_IN ?? "7d") as SignOptions["expiresIn"];
/**
 * Generate Access Token
 */
export function generateAccessToken(payload: JwtPayload): string {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
}

/**
 * Generate Refresh Token
 */
export function generateRefreshToken(payload: JwtPayload): string {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  });
}

/**
 * Verify Access Token
 */
export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, ACCESS_SECRET) as JwtPayload;
}

/**
 * Verify Refresh Token
 */
export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, REFRESH_SECRET) as JwtPayload;
}