/*
  Warnings:

  - You are about to drop the `phone_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "phone_table";

-- CreateTable
CREATE TABLE "phonetable" (
    "id" TEXT NOT NULL,
    "phoneImage" TEXT NOT NULL,
    "phoneName" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "ram" INTEGER NOT NULL,
    "storage" INTEGER NOT NULL,
    "connectivity" TEXT NOT NULL,
    "battery" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "phonetable_pkey" PRIMARY KEY ("id")
);
