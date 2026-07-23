/*
  Warnings:

  - You are about to drop the column `sortOrder` on the `Category` table. All the data in the column will be lost.
  - Added the required column `merchantId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('DRAFT', 'PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "sortOrder";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "attributes" JSONB,
ADD COLUMN     "compareAtPrice" DECIMAL(12,2),
ADD COLUMN     "costPrice" DECIMAL(12,2),
ADD COLUMN     "countryOfOrigin" TEXT,
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'INR',
ADD COLUMN     "height" DOUBLE PRECISION,
ADD COLUMN     "length" DOUBLE PRECISION,
ADD COLUMN     "manufacturer" TEXT,
ADD COLUMN     "maxOrderQty" INTEGER,
ADD COLUMN     "merchantId" TEXT NOT NULL,
ADD COLUMN     "minOrderQty" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "publishedAt" TIMESTAMP(3),
ADD COLUMN     "status" "ProductStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "warranty" TEXT,
ADD COLUMN     "weight" DOUBLE PRECISION,
ADD COLUMN     "width" DOUBLE PRECISION,
ALTER COLUMN "sku" DROP NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(12,2);

-- CreateIndex
CREATE INDEX "Category_parentId_idx" ON "Category"("parentId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
