import express from 'express'

const app = express()

app.use(express.json())
app.listen(7777, () => console.log("Serveris running on port 7777")
)