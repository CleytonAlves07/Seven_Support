import { Router } from 'express'
import { CreateServicoController } from '../controllers/servicos/createServicoController'
import { GetAllServicosController } from '../controllers/servicos/getAllServicoController'

const servicoRouter = Router()

const createServico = new CreateServicoController()
const getAllServicos = new GetAllServicosController()

servicoRouter.get('/', getAllServicos.getAllServicos)
servicoRouter.post('/', createServico.createServico)


export { servicoRouter }