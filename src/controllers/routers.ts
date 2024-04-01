import app from 'express'
import userRouter from './usersController'

const routers = app.Router()
routers.use("/users", userRouter)

export default routers