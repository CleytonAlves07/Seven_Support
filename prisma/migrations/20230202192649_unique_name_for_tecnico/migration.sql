/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `tecnicos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tecnicos_nome_key" ON "tecnicos"("nome");
