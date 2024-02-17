
import mongoose,{Schema} from"mongoose"

const UsersSchema=new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },email:{
        type:String,
        unique:true,
        required:true,
    },password:{
        type:String,
        required:true,
        min:8,
    }

},{ timestamps: true });
export const Users=mongoose.model("Users",UsersSchema);