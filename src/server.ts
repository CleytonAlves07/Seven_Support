import express from 'express'
import 'express-async-errors'
import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'

import { ClienteRouter } from './routes/ClientesRoutes'
import { TecnicoRouter } from './routes/TecnicosRoutes'
import errorHandler from './middleware/ErrorHandler'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/cliente', ClienteRouter)

app.use('/tecnico', TecnicoRouter)

app.use(errorHandler)

const PORT = process.env.PORT ?? 7777
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)
)