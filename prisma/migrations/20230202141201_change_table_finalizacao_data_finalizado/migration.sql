/*
  Warnings:

  - You are about to drop the column `data_entrega` on the `finalizacao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "finalizacao" DROP COLUMN "data_entrega",
ADD COLUMN     "data_finalizado" TIMESTAMP(3);
