import dotenv from "dotenv"
let envPath: string = (process.env.NODE_ENV)? `${__dirname}/env/.env.${process.env.NODE_ENV}`: `${__dirname}/env/.env.dev`
dotenv.config({
    path: envPath
})
import mongoose from "mongoose"
console.log(process.env.MONGODB_URL)
export default  async () => {
    await mongoose.connect(process.env.MONGODB_URL as string)
}