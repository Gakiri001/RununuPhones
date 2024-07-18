/*
  Warnings:

  - Changed the type of `ram` on the `phone_table` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `storage` on the `phone_table` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `battery` on the `phone_table` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "phone_table" DROP COLUMN "ram",
ADD COLUMN     "ram" INTEGER NOT NULL,
DROP COLUMN "storage",
ADD COLUMN     "storage" INTEGER NOT NULL,
DROP COLUMN "battery",
ADD COLUMN     "battery" INTEGER NOT NULL;
