-- CreateTable
CREATE TABLE "order_table" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "phoneName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "phoneId" TEXT NOT NULL,

    CONSTRAINT "order_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order_table" ADD CONSTRAINT "order_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_table" ADD CONSTRAINT "order_table_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "phonetable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
