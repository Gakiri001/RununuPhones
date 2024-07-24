/*
  Warnings:

  - You are about to drop the column `phoneId` on the `order_table` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `order_table` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "order_table" DROP CONSTRAINT "order_table_phoneId_fkey";

-- DropForeignKey
ALTER TABLE "order_table" DROP CONSTRAINT "order_table_userId_fkey";

-- AlterTable
ALTER TABLE "order_table" DROP COLUMN "phoneId",
DROP COLUMN "userId";
