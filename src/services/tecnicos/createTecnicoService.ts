import { Tecnico } from '@prisma/client';
import { prisma } from '../../database/prismaClient';
import HttpException from '../../errors/HttpException'
import status  from "http-status"


export class CreateTecnicoService {
  async createTecnico(nome: string): Promise<Tecnico> {
    if ((nome).length <= 3 || typeof(nome) !== 'string') {
      throw new HttpException(status.BAD_REQUEST, 'Insira um nome válido')
    }
    const nameExist = await prisma.tecnico.findFirst({where: {nome}})
    if (nameExist) throw new HttpException(status.BAD_REQUEST, 'Já existe um cadastro com esse nome')
    const tecnico = await prisma.tecnico.create({
      data: {
        nome
      }
    })
    return tecnico
  }
}