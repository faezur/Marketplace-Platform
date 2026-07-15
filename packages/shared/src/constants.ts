export const UserRole = {
  ADMIN: 'ADMIN',
  MERCHANT: 'MERCHANT',
  CUSTOMER: 'CUSTOMER',
} as const

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

export const API_VERSION = 'v1'
