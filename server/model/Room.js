
import mongoose,{Schema} from "mongoose";
export const roomSchema=new Schema({
    title:{
        type:String,
        required:true,
    },price:{
        type:Number,
        required:true,
    },maxPeople:{
        type:Number,
        rwquired:true
    },avilable:{
        type:Boolean,
        default:true,
    },roomNumber:[{
        number:Number,
        unavilableDates:{type:[Date]}
    }]
    ,description:{
        type:String,
        rewuired:true,
    },image:{type:[String]}

})