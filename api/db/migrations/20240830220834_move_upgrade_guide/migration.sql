/*
  Warnings:

  - You are about to drop the column `upgradeGuide` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `upgradeGuide` to the `CommentThread` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "upgradeGuide";

-- AlterTable
ALTER TABLE "CommentThread" ADD COLUMN     "upgradeGuide" TEXT NOT NULL;
