import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {userDocument} from "../model/userModel";

// export async function encrypt(password: )
export async function creatToken(_id: number, username: string, password: string){

}
export async function refreshToken(token: string, user: userDocument){
    // const refreshedToken: string;

    return
}