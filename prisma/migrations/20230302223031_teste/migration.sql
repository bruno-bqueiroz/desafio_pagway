/*
  Warnings:

  - You are about to drop the column `transactionId` on the `Payables` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Payables` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Payables" DROP CONSTRAINT "Payables_transactionId_fkey";

-- AlterTable
ALTER TABLE "Payables" DROP COLUMN "transactionId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Payables" ADD CONSTRAINT "Payables_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
