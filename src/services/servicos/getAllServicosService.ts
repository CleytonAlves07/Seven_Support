import { Servico } from '@prisma/client'
import { prisma } from '../../database/prismaClient'


export class GetAllServicosService {
  async getAllServicos(): Promise < Servico[]> {
    return prisma.servico.findMany()
  }
}