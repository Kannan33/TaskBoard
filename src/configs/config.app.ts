import dotenv from "dotenv"
let envPath: string = (process.env.NODE_ENV)? `${__dirname}/env/.env.${process.env.NODE_ENV}`: `${__dirname}/env/.env.dev`
dotenv.config({
    path: envPath
})
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import routers from "../controllers/routers"

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


app.use("/",routers)
export default app