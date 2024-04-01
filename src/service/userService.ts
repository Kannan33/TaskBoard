import {User, userDocument} from "../model/userModel"

export async function getUsers(){
    return await User.find()
}
export async function creatUser(username: string, email: string, password: string){
    const check_user = await User.findOne({email: email})
    if(check_user){
        throw new Error("user already exist")
    }
    const user:  userDocument= new User({
        username: username,
        email: email,
        password: password
    })
    return await user.save()
}

export async function updateUser(user: userDocument){

}

export async function deleteUser(_id: number){
    User.findByIdAndDelete(_id).then(user =>{
        return (user)? user: 'not found'
        }).catch(err => {
            return 'err while get the data'
    })
}