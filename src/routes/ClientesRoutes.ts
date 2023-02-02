import { Router } from 'express';
import { GetAllClientesController } from '../controllers/clientes/getAllClientesController';


const ClienteRouter = Router()

const getAllClientes = new GetAllClientesController()

ClienteRouter.get('/', getAllClientes.getAllClientes)



export { ClienteRouter }