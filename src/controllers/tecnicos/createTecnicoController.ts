import { Request, response, Response} from 'express'
import { prisma } from '../../database/prismaClient'

export class CreateTecnicoController {
  async handle(req: Request, res: Response) {
    const { nome } = req.body

    const tecnico = await prisma.tecnico.create({
      data: {
        nome
      }
    })
    return res.status(201).json(tecnico)
  }
}