import express from 'express'
import routers from './routes/index.routes'
import {PrismaClient} from  '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use('/', routers )

const PORT = process.env.PORT || 3333

app.listen(PORT, ()=> console.log('Servidor rodando na port '+ PORT))