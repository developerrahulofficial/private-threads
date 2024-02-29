/*
  Warnings:

  - Added the required column `threadId` to the `Thread` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "threadId" TEXT NOT NULL;
