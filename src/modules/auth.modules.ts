import { sign, verify } from 'jsonwebtoken'
// import { PrismaClient } from '@prisma/client'

export default function auth(data: any) {
    console.log(data)
    const { email, password } = data
    if (!email || !password) {
        return { status: 401, data: { message: "Dados inválidos" } }
    }
    const id = 1
    //consultar e mail e senha no banco
    // const pe
    const token = sign({}, 'valente', {
        subject: String(id),
        expiresIn: 10 // 2 minutos
    })
    validate(token)
    return { status: 200, data: { token } }

}


function validate(token: string) {
    let id
    verify(token, 'valente', (err, decoded) => {
        if(err) console.log('Err: ', err.name)
        id = decoded?.sub
    })
    console.log('Usuário logado ',id)

}