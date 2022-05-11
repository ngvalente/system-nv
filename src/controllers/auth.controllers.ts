import { Request, Response } from "express"
import authModules from "../modules/auth.modules"

export default async function auth ( req: Request, res: Response){

    try {
        console.log(req.body, 'ee')
        const {status, data}: any = authModules(req.body)
        return res.status(status).json(data)
    } catch (error) {
        return res.status(400).json({data:error})
    }

}
