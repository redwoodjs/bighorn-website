/*
  Warnings:

  - You are about to drop the column `parentCommentId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the `SubscribeUserToComment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_parentCommentId_fkey";

-- DropForeignKey
ALTER TABLE "SubscribeUserToComment" DROP CONSTRAINT "SubscribeUserToComment_commentId_fkey";

-- DropForeignKey
ALTER TABLE "SubscribeUserToComment" DROP CONSTRAINT "SubscribeUserToComment_userId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "parentCommentId",
ADD COLUMN     "commentThreadId" INTEGER;

-- DropTable
DROP TABLE "SubscribeUserToComment";

-- CreateTable
CREATE TABLE "CommentThread" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommentThread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscribeUserToCommentThread" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "threadId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubscribeUserToCommentThread_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_commentThreadId_fkey" FOREIGN KEY ("commentThreadId") REFERENCES "CommentThread"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscribeUserToCommentThread" ADD CONSTRAINT "SubscribeUserToCommentThread_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscribeUserToCommentThread" ADD CONSTRAINT "SubscribeUserToCommentThread_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "CommentThread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
