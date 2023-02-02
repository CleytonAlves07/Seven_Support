import { Request, Response} from 'express'
import { CreateTecnicoService } from '../../services/tecnicos/createTecnicoService'
import status  from "http-status"

const createTecnicoService = new CreateTecnicoService()
export class CreateTecnicoController {
  async createTecnico(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body

    const tecnico = await createTecnicoService.createTecnico(nome)

    
    return res.status(status.CREATED).json(tecnico)
  }
}