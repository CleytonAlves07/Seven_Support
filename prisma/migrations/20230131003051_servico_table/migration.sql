-- CreateTable
CREATE TABLE "Servico" (
    "id" TEXT NOT NULL,
    "atividade" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);
