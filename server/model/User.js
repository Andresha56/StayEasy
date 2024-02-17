

import mongoose,{Schema} from "mongoose";

const UserSchema=new Schema({
    username:{
        type:String,
        min:3,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:8,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },  
},{timesstamps:true,}
);
export const User=mongoose.model("User",UserSchema);