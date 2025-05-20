/*
  Warnings:

  - The values [n1,n2,n3] on the enum `Oficina` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Oficina_new" AS ENUM ('artes', 'violao', 'jiujitsu', 'nivel1', 'nivel2', 'nivel3');
ALTER TABLE "InformacoesAdicionais" ALTER COLUMN "oficina" TYPE "Oficina_new" USING ("oficina"::text::"Oficina_new");
ALTER TYPE "Oficina" RENAME TO "Oficina_old";
ALTER TYPE "Oficina_new" RENAME TO "Oficina";
DROP TYPE "Oficina_old";
COMMIT;
