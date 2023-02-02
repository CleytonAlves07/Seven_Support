import express from 'express'
import 'express-async-errors'
import { ClienteRouter } from './routes/ClientesRoutes'
import { TecnicoRouter } from './routes/TecnicosRoutes'

const app = express()

app.use(express.json())

app.use('/cliente', ClienteRouter)

app.use('/tecnico', TecnicoRouter)

app.listen(7777, () => console.log("Serveris running on port 7777")
)