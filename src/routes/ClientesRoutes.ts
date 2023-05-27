import { Router } from 'express';
import { CreateClienteController } from '../controllers/clientes/createClienteController';
import { GetAllClientesController } from '../controllers/clientes/getAllClientesController';


const clienteRouter = Router()

const getAllClientes = new GetAllClientesController()
const createCliente = new CreateClienteController()

clienteRouter.get('/', getAllClientes.getAllClientes)
clienteRouter.post('/', createCliente.createCliente )



export { clienteRouter }