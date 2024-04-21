/*
  Warnings:

  - You are about to drop the column `apdated_at` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `apdated_at` on the `Exercise_log` table. All the data in the column will be lost.
  - You are about to drop the column `apdated_at` on the `Exercise_time` table. All the data in the column will be lost.
  - You are about to drop the column `apdated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `apdated_at` on the `Workout` table. All the data in the column will be lost.
  - You are about to drop the column `apdated_at` on the `Workout_log` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Exercise_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Exercise_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Workout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Workout_log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "apdated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Exercise_log" DROP COLUMN "apdated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Exercise_time" DROP COLUMN "apdated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "apdated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "apdated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Workout_log" DROP COLUMN "apdated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
