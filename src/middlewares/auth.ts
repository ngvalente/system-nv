import { Request, Response } from "express"
import { verify } from 'jsonwebtoken'


export default async function auth ( req: Request, res: Response){

        let id
        verify (req.body.token, 'valente', (err:any, decoded: any) => {
            if(err) console.log('Err: ', err.name)
            id = decoded?.sub
        })

        res.json()
        console.log('Usuário logado ',id)
}

