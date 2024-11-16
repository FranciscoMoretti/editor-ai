/*
  Warnings:

  - Added the required column `user_id` to the `configs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `runs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `threads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."configs" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."runs" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."threads" ADD COLUMN     "user_id" TEXT NOT NULL,
ALTER COLUMN "values" SET DEFAULT '{}';
