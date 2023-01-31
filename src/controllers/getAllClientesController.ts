import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';



export class GetAllClientesController {
  async handle(_req: Request, res: Response) {
  
    const clientes = await prismaClient.cliente.findMany()

    return res.status(200).json(clientes)
  }
  
}