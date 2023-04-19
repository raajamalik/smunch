/*
  Warnings:

  - You are about to drop the column `photos` on the `Review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "reviewId" INTEGER;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "photos";

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE SET NULL ON UPDATE CASCADE;
