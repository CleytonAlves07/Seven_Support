import { Router } from 'express';
import { CreateClienteController } from '../controllers/clientes/createClienteController';
import { GetAllClientesController } from '../controllers/clientes/getAllClientesController';


const ClienteRouter = Router()

const getAllClientes = new GetAllClientesController()
const createCliente = new CreateClienteController()

ClienteRouter.get('/', getAllClientes.getAllClientes)
ClienteRouter.post('/', createCliente.createCliente )



export { ClienteRouter }