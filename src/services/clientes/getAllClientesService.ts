import { Cliente } from '@prisma/client'
import { prisma } from '../../database/prismaClient'


export class GetAllClientesService {
  async getAllClientes(): Promise < Cliente[]> {
    return prisma.cliente.findMany()
  }
}