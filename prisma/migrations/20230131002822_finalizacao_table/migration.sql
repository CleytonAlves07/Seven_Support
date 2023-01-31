/*
  Warnings:

  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Cliente";

-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "finalizacao" (
    "id" TEXT NOT NULL,
    "valor_total" DECIMAL(65,30) NOT NULL,
    "data_entrada" TIMESTAMP(3) NOT NULL,
    "data_entrega" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "finalizacao_pkey" PRIMARY KEY ("id")
);
