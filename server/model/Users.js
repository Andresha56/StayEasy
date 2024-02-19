
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
    },
    IsAdmin:{
        type:Boolean,
        default:false,
    }

    

},{ timestamps: true });
export const Users=mongoose.model("user",UsersSchema);