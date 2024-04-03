/*
  Warnings:

  - You are about to drop the column `weigth` on the `Exercise_time` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exercise_time" DROP COLUMN "weigth",
ADD COLUMN     "weight" INTEGER NOT NULL DEFAULT 0;
