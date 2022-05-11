/*
  Warnings:

  - You are about to drop the column `typeccount` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeUser` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userType` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "type_user" AS ENUM ('client', 'employee', 'admin', 'master');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "typeccount",
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "typeUser" "type_user" NOT NULL,
ADD COLUMN     "userType" TEXT NOT NULL;

-- DropEnum
DROP TYPE "TypeAccount";

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
