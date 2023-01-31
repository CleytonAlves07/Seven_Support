/*
  Warnings:

  - Added the required column `id_cliente` to the `ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_finalizacao` to the `ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_tecnico` to the `ordens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ordens" ADD COLUMN     "id_cliente" TEXT NOT NULL,
ADD COLUMN     "id_finalizacao" TEXT NOT NULL,
ADD COLUMN     "id_tecnico" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "OrdemServico" (
    "id_ordem" TEXT NOT NULL,
    "id_servico" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned_by" TEXT NOT NULL,

    CONSTRAINT "OrdemServico_pkey" PRIMARY KEY ("id_ordem","id_servico")
);

-- AddForeignKey
ALTER TABLE "ordens" ADD CONSTRAINT "ordens_id_tecnico_fkey" FOREIGN KEY ("id_tecnico") REFERENCES "tecnicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordens" ADD CONSTRAINT "ordens_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordens" ADD CONSTRAINT "ordens_id_finalizacao_fkey" FOREIGN KEY ("id_finalizacao") REFERENCES "finalizacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdemServico" ADD CONSTRAINT "OrdemServico_id_ordem_fkey" FOREIGN KEY ("id_ordem") REFERENCES "ordens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdemServico" ADD CONSTRAINT "OrdemServico_id_servico_fkey" FOREIGN KEY ("id_servico") REFERENCES "serviços"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
