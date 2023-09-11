/*
  Warnings:

  - You are about to drop the column `comments` on the `userModel` table. All the data in the column will be lost.
  - You are about to drop the column `like` on the `userModel` table. All the data in the column will be lost.
  - You are about to drop the column `reply` on the `userModel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "lawModel" DROP CONSTRAINT "lawModel_userID_fkey";

-- AlterTable
ALTER TABLE "lawModel" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "userModel" DROP COLUMN "comments",
DROP COLUMN "like",
DROP COLUMN "reply",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "commentModel" (
    "id" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lawID" TEXT NOT NULL,

    CONSTRAINT "commentModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "replyModel" (
    "id" TEXT NOT NULL,
    "reply" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commentID" TEXT NOT NULL,

    CONSTRAINT "replyModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lawModel" ADD CONSTRAINT "lawModel_userID_fkey" FOREIGN KEY ("userID") REFERENCES "userModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentModel" ADD CONSTRAINT "commentModel_lawID_fkey" FOREIGN KEY ("lawID") REFERENCES "lawModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replyModel" ADD CONSTRAINT "replyModel_commentID_fkey" FOREIGN KEY ("commentID") REFERENCES "commentModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
