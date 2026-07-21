/*
  Warnings:

  - You are about to drop the column `isApproved` on the `Merchant` table. All the data in the column will be lost.
  - You are about to drop the column `walletAddress` on the `Merchant` table. All the data in the column will be lost.
  - Added the required column `country` to the `Merchant` table without a default value. This is not possible if the table is not empty.
  - Made the column `governmentId` on table `Merchant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `governmentIdType` on table `Merchant` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "MerchantStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'SUSPENDED');

-- AlterTable
ALTER TABLE "Merchant" DROP COLUMN "isApproved",
DROP COLUMN "walletAddress",
ADD COLUMN     "approvedBy" TEXT,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "rejectionReason" TEXT,
ADD COLUMN     "ssn" TEXT,
ADD COLUMN     "status" "MerchantStatus" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "governmentId" SET NOT NULL,
ALTER COLUMN "governmentIdType" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "refreshToken" TEXT;

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_status_idx" ON "User"("status");
