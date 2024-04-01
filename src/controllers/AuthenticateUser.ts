import { Router, Request, Response } from "express";
const authUser:Router = Router()

authUser.post("/auth", (req: Request, res: Response)=>{
    console.log(req.body)
    res.sendStatus(201)
})