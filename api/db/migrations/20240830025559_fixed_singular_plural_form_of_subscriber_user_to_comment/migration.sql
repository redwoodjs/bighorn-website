/*
  Warnings:

  - You are about to drop the `SubscribeUserToComments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SubscribeUserToComments" DROP CONSTRAINT "SubscribeUserToComments_commentId_fkey";

-- DropForeignKey
ALTER TABLE "SubscribeUserToComments" DROP CONSTRAINT "SubscribeUserToComments_userId_fkey";

-- DropTable
DROP TABLE "SubscribeUserToComments";

-- CreateTable
CREATE TABLE "SubscribeUserToComment" (
    "id" SERIAL NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubscribeUserToComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubscribeUserToComment" ADD CONSTRAINT "SubscribeUserToComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscribeUserToComment" ADD CONSTRAINT "SubscribeUserToComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
