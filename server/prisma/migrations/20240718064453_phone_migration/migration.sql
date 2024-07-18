-- CreateTable
CREATE TABLE "phone_table" (
    "id" TEXT NOT NULL,
    "phoneImage" TEXT NOT NULL,
    "phoneName" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "connectivity" TEXT NOT NULL,
    "battery" TEXT NOT NULL,

    CONSTRAINT "phone_table_pkey" PRIMARY KEY ("id")
);
