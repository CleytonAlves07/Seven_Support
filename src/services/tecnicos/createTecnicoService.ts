import { Tecnico } from '@prisma/client';
import { prisma } from '../../database/prismaClient';



export class CreateTecnicoService {
  async createTecnico(nome: string): Promise<Tecnico> {
    const tecnico = await prisma.tecnico.create({
      data: {
        nome
      }
    })
    return tecnico
  }
}