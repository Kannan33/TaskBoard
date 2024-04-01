import mongoose, { Document, Schema, Model, model } from 'mongoose';

export interface userDocument extends Document{
    username: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
}
const userSchema: Schema<userDocument>  =new Schema<userDocument>({
    username: Schema.Types.String,
    email:{
        type: Schema.Types.String,
        require: true,
        unique: true
    },
    password:{
        type: Schema.Types.String,
        require: true
    },
},
    {
        timestamps: true
    }
)
export const User: Model<userDocument> = model<userDocument>("User", userSchema)