import express from 'express'
import { router } from './routes'
import 'express-async-errors'

const app = express()

app.use(express.json())

app.use(router)

app.listen(7777, () => console.log("Serveris running on port 7777")
)