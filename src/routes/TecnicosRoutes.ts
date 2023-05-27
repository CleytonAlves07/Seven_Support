import { Router } from 'express';
import { CreateTecnicoController } from '../controllers/tecnicos/createTecnicoController';
import { GetAllTecnicosController } from '../controllers/tecnicos/getAllTecnicosController';


const tecnicoRouter = Router()

const createTecnico = new CreateTecnicoController()
const getAllTecnicos = new GetAllTecnicosController()

tecnicoRouter.get('/', getAllTecnicos.getAllTecnicos)
tecnicoRouter.post('/', createTecnico.createTecnico)


export { tecnicoRouter }