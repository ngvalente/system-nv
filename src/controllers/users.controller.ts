import { Request, Response } from "express"
import userModules from "../modules/user.modules"

export = {
    async getAll(req: Request, res: Response) {
        try {
            const { status, data }: any = await userModules.usersAll()
            return res.status(status).send(data)
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    async getById(req: Request, res: Response) {
        try {
            const { status, data }: any = await userModules.userById(req.params.id)
            return res.status(status).send(data)
        } catch (error) {
            return res.status(400).send(error)

        }

    }
}