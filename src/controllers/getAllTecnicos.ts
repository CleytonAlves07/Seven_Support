import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';


export class GetAllTecnicosController {
  async handle(_req: Request, res: Response) {
    const tecnicos = await prismaClient.tecnico.findMany()

    return res.status(200).json(tecnicos)
  }
}