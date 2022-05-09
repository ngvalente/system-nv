import { Request, Response} from "express"
import userModules from "../modules/user.modules"

export = {
    async getlist (req: Request, res: Response) {
        try {
            const {status, data}:any = await userModules.userListAll()

                return res.status(status).send(data)
        } catch (error) {
            
        }
    }
}