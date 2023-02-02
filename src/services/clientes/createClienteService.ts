import { Cliente } from '@prisma/client';
import { prisma } from '../../database/prismaClient';
import HttpException from '../../errors/HttpException'
import status  from "http-status"


export class CreateClienteService {
  async createCliente(nome: string, email: string, empresa: string, telefone: string): Promise<Cliente> {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i
    const emailExist = await prisma.cliente.findUnique({where: {email: email}})
    const validEmail = emailRegex.test(email)
    if (!validEmail) {
      throw new HttpException(status.BAD_REQUEST, 'Insira um email válido')
    } else if (emailExist) {
      throw new HttpException(status.BAD_REQUEST, 'Já existe um cadastro com esse email')
    }
      
    const cliente = await prisma.cliente.create({
      data: {
        nome,
        email,
        empresa,
        telefone,
      }
    })
    return cliente
  }
}


