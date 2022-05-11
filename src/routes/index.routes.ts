import { Router } from "express";
import userRouter from "./users/users.routes";
import authController from "../controllers/auth.controllers";
import auth from "../middlewares/auth";

const routes = Router()
routes.post('/auth', authController)
routes.use('/users', userRouter)
routes.post('/val', auth)

export default routes