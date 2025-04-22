/*
  Warnings:

  - You are about to drop the column `enderecoId` on the `Estudante` table. All the data in the column will be lost.
  - You are about to drop the column `informacoesAdicionaisId` on the `Estudante` table. All the data in the column will be lost.
  - You are about to drop the column `responsavelId` on the `Estudante` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[estudanteId]` on the table `Endereco` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[estudanteId]` on the table `InformacoesAdicionais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[estudanteId]` on the table `Responsavel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `estudanteId` to the `Endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estudanteId` to the `InformacoesAdicionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estudanteId` to the `Responsavel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Estudante" DROP CONSTRAINT "Estudante_enderecoId_fkey";

-- DropForeignKey
ALTER TABLE "Estudante" DROP CONSTRAINT "Estudante_informacoesAdicionaisId_fkey";

-- DropForeignKey
ALTER TABLE "Estudante" DROP CONSTRAINT "Estudante_responsavelId_fkey";

-- AlterTable
ALTER TABLE "Endereco" ADD COLUMN     "estudanteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Estudante" DROP COLUMN "enderecoId",
DROP COLUMN "informacoesAdicionaisId",
DROP COLUMN "responsavelId";

-- AlterTable
ALTER TABLE "InformacoesAdicionais" ADD COLUMN     "estudanteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Responsavel" ADD COLUMN     "estudanteId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_estudanteId_key" ON "Endereco"("estudanteId");

-- CreateIndex
CREATE UNIQUE INDEX "InformacoesAdicionais_estudanteId_key" ON "InformacoesAdicionais"("estudanteId");

-- CreateIndex
CREATE UNIQUE INDEX "Responsavel_estudanteId_key" ON "Responsavel"("estudanteId");

-- AddForeignKey
ALTER TABLE "Responsavel" ADD CONSTRAINT "Responsavel_estudanteId_fkey" FOREIGN KEY ("estudanteId") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_estudanteId_fkey" FOREIGN KEY ("estudanteId") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InformacoesAdicionais" ADD CONSTRAINT "InformacoesAdicionais_estudanteId_fkey" FOREIGN KEY ("estudanteId") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
