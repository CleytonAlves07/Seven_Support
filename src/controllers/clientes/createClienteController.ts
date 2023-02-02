import { Request, Response} from 'express'
import status  from "http-status"
import { CreateClienteService } from '../../services/clientes/createClienteService'

const createClienteService = new CreateClienteService()
export class CreateClienteController {
  async createCliente(req: Request, res: Response): Promise<Response> {
    const { nome, email, empresa, telefone } = req.body

    const cliente = await createClienteService.createCliente(nome, email, empresa, telefone)

    
    return res.status(status.CREATED).json(cliente)
  }
}