import { Request, Response } from 'express';
import status  from "http-status"
import { GetAllServicosService } from '../../services/servicos/getAllServicosService';

const getAllServicosService = new GetAllServicosService()

export class GetAllServicosController {
  async getAllServicos(_req: Request, res: Response): Promise<Response> {
    
    const servicos = await getAllServicosService.getAllServicos()

    return res.status(status.OK).json(servicos)
  }
  
}