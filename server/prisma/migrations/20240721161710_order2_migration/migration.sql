/*
  Warnings:

  - You are about to drop the column `email` on the `order_table` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `order_table` table. All the data in the column will be lost.
  - You are about to drop the column `phoneName` on the `order_table` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `order_table` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "order_table" DROP COLUMN "email",
DROP COLUMN "firstname",
DROP COLUMN "phoneName",
DROP COLUMN "price";
