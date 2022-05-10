import { Router } from "express";
import userController from "../../controllers/users.controller";
const userRouter = Router()

userRouter.get('/list', userController.getAll)
userRouter.get('/:id', userController.getById)
userRouter.get('/:name')
userRouter.post('/create')
userRouter.put('/:id')
userRouter.delete('/:id')


export default userRouter