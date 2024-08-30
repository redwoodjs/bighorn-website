-- CreateTable
CREATE TABLE "SubscribeUserToComments" (
    "id" SERIAL NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubscribeUserToComments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubscribeUserToComments" ADD CONSTRAINT "SubscribeUserToComments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscribeUserToComments" ADD CONSTRAINT "SubscribeUserToComments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
