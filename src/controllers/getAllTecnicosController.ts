import { Request, Response} from 'express';
import { GetAllTecnicosService } from '../services/getAllTecnicoService';
import status  from "http-status"


const getAllTecnicosService = new GetAllTecnicosService()

export class GetAllTecnicosController {
  async getAllTecnicos(_req: Request, res: Response): Promise<Response> {
    
    const tecnicos = await getAllTecnicosService.getAllTecnicos()

    return res.status(status.OK).json(tecnicos)
  }
}