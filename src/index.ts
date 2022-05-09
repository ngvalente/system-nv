import express from 'express'
import {PrismaClient} from  '@prisma/client'
const prisma = new PrismaClient()
const app = express()
app.get('/', async (req, res)=>{
    const data = await prisma.user.findMany()
    return res.json(data)
})

const PORT = process.env.PORT || 3333

app.listen(PORT, ()=> console.log('Servidor rodando na port '+ PORT))