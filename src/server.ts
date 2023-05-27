import express from 'express'
import 'express-async-errors'
import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'

import { clienteRouter } from './routes/ClientesRoutes'
import { tecnicoRouter } from './routes/TecnicosRoutes'
import { servicoRouter } from './routes/ServicoRoutes'
import errorHandler from './middleware/ErrorHandler'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/cliente', clienteRouter)

app.use('/tecnico', tecnicoRouter)

app.use('/servico', servicoRouter)

app.use(errorHandler)

const PORT = process.env.PORT ?? 7777
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)
)