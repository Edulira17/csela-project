/*
  Warnings:

  - Added the required column `email` to the `Responsavel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Responsavel" ADD COLUMN     "email" VARCHAR(255) NOT NULL DEFAULT 'temporario@email.com';
