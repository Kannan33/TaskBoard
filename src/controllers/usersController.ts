// users controller

import {Router, Request, Response, NextFunction} from "express"
import {creatUser, deleteUser, getUsers} from "../service/userService"
import { } from "../utils/jwt.util"
import {User} from "../model/userModel";

const userRouter = Router()

userRouter.get("/",async (req: Request, res: Response)=>{
    console.log(req.url, req.cookies)
    const users = await getUsers()
    res.status(200).send(JSON.stringify(users))
})

userRouter.post("/",(req: Request, res: Response, next: NextFunction)=>{
    // parse form body
    const { username, email , password, confirmPassword } = req.body
    // check valid && check password is valid
    if(!(username && email && password && confirmPassword)){
        return res.status(422).send(JSON.stringify({error: "inputs is invalid"}))
    }
    if(!(password === confirmPassword)){
        JSON.stringify({error: "password mismatch"})
    }
    // P:  add further validations
    console.log("validating")
    next()
}, async (req: Request, res: Response)=>{
    console.log(req.body) // check input
    const { username, email , password } = req.body
    try{
        console.log("up creat")
        const user = await creatUser(username, email, password)
        console.log("created")
        res.status(201).send(JSON.stringify({msg: "user created"}))
    }catch(err: any){
        res.status(422).send(JSON.stringify({
            error: err.message
        }))
    }
})

userRouter.delete("/:id",async (req: Request, res: Response)=>{
    const user = deleteUser(parseInt(req.params.id))
})

export default userRouter