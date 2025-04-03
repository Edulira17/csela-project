-- CreateEnum
CREATE TYPE "Turno" AS ENUM ('matutino', 'vespertino');

-- CreateEnum
CREATE TYPE "Oficina" AS ENUM ('artes', 'violao', 'jiujitsu', 'n1', 'n2', 'n3');

-- CreateEnum
CREATE TYPE "Moradia" AS ENUM ('propria', 'alugada', 'cedida');

-- CreateTable
CREATE TABLE "Estudante" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" VARCHAR(255) NOT NULL,
    "naturalidade" VARCHAR(255) NOT NULL,
    "idade" INTEGER NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "escola" VARCHAR(255) NOT NULL,
    "serie" VARCHAR(255) NOT NULL,
    "turno" "Turno" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "responsavelId" INTEGER,
    "enderecoId" INTEGER,
    "informacoesAdicionaisId" INTEGER,

    CONSTRAINT "Estudante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Responsavel" (
    "id" SERIAL NOT NULL,
    "nomeResponsavel" VARCHAR(255) NOT NULL,
    "numeroContato" VARCHAR(255) NOT NULL,
    "rg" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Responsavel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "cep" CHAR(9) NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InformacoesAdicionais" (
    "id" SERIAL NOT NULL,
    "oficina" "Oficina" NOT NULL,
    "horario" "Turno" NOT NULL,
    "moradia" "Moradia" NOT NULL,
    "auxilio" BOOLEAN NOT NULL,
    "transporte" BOOLEAN NOT NULL,
    "moradores" TEXT NOT NULL,
    "divulgacao" BOOLEAN NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InformacoesAdicionais_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "Responsavel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_informacoesAdicionaisId_fkey" FOREIGN KEY ("informacoesAdicionaisId") REFERENCES "InformacoesAdicionais"("id") ON DELETE SET NULL ON UPDATE CASCADE;
