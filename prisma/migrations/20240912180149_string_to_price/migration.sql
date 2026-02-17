/*
  Warnings:

  - You are about to alter the column `pricePaid` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `pricePaid` VARCHAR(191) NULL DEFAULT '1';
