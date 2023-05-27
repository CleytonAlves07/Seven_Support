import { Servico } from '@prisma/client'
import { prisma } from '../../database/prismaClient'
import HttpException from '../../errors/HttpException'
import status from 'http-status'

export class CreateServicoService {
  async createServico(atividade: string): Promise<Servico> {
    if ((atividade).length <= 10 || typeof (atividade) !== 'string') {
      throw new HttpException(status.BAD_REQUEST, 'insira uma atividade válida e com uma descrição mais detalhada do serviço.')
    } 
    const servico = await prisma.servico.create({
      data: {
        atividade
      }
    })
    return servico
  }
}