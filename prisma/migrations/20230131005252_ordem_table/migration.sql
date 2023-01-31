/*
  Warnings:

  - You are about to drop the `Servico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Servico";

-- CreateTable
CREATE TABLE "serviços" (
    "id" TEXT NOT NULL,
    "atividade" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "serviços_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordens" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "equipamento" TEXT NOT NULL,
    "defeito" TEXT NOT NULL,

    CONSTRAINT "ordens_pkey" PRIMARY KEY ("id")
);
