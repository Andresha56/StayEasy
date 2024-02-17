
import "dotenv/config";
import mongoose from "mongoose";

const DB_Url=process.env.DATABASE_URL
export const ConnectToDB=async()=>{
    try{
        await mongoose.connect(DB_Url,{
            dbName:"BookingSite",
        })
    }catch(e){
        console.log("can't to data base");
        console.log(e)
    }
}