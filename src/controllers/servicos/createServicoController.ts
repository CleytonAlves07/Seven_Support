import { Request, Response } from "express"
import { CreateServicoService } from '../../services/servicos/createServicoService'
import status from 'http-status'

const createServicoService = new CreateServicoService()

export class CreateServicoController {
  async createServico(req: Request, res: Response): Promise<Response> {
    const { atividade } = req.body

    const servico = await createServicoService.createServico(atividade)

    return res.status(status.CREATED).json(servico)
  }
}
