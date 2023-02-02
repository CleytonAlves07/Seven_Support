import { Request, Response } from 'express';
import status  from "http-status"
import { GetAllClientesService } from '../../services/clientes/getAllClientesService';

const getAllClientesService = new GetAllClientesService()
export class GetAllClientesController {
  async getAllClientes(_req: Request, res: Response): Promise<Response> {
    
    const clientes = await getAllClientesService.getAllClientes()

    return res.status(status.OK).json(clientes)
  }
  
}