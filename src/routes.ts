import { Router } from 'express';
import { CreateTecnicoController } from './controllers/createTecnicoController';
import { GetAllClientesController } from './controllers/getAllClientesController';
import { GetAllTecnicosController } from './controllers/getAllTecnicosController';


const router = Router()

const createTecnico = new CreateTecnicoController()
const getAllTecnicos = new GetAllTecnicosController()
const getAllClientes = new GetAllClientesController()

router.get('/clientes', getAllClientes.handle)
router.get('/tecnico', getAllTecnicos.getAllTecnicos)
router.post('/tecnico', createTecnico.handle)


export { router }