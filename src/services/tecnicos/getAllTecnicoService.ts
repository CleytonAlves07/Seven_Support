import { Tecnico } from '@prisma/client';
import { prisma } from '../../database/prismaClient';

export class GetAllTecnicosService {
  async getAllTecnicos(): Promise<Tecnico[]> {

    return prisma.tecnico.findMany({
      select: {
        id: true,
        nome: true,
        created_at: true
      }
    })
  }
}