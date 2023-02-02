import { Router } from 'express';
import { CreateTecnicoController } from '../controllers/tecnicos/createTecnicoController';
import { GetAllTecnicosController } from '../controllers/tecnicos/getAllTecnicosController';


const TecnicoRouter = Router()

const createTecnico = new CreateTecnicoController()
const getAllTecnicos = new GetAllTecnicosController()

TecnicoRouter.get('/', getAllTecnicos.getAllTecnicos)
TecnicoRouter.post('/', createTecnico.createTecnico)


export { TecnicoRouter }