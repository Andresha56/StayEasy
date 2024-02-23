
import 'dotenv/config'
import express from "express";
import { ConnectToDB } from './connection/DataBase.js';
import cors from "cors";
import cookieParser from 'cookie-parser';
// ----routes----
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js"
import hotelRouter from "./routes/hotel.js"
import roomRouter from "./routes/room.js"



// ---server---
const server = express();
// ---data--base---
ConnectToDB();
// ----middle---wares----
server
    .use(cookieParser())
    .use(cors())
    .use(express.json())
    .use("/auth", authRouter)
    .use("/user", userRouter)
    .use("/hotel", hotelRouter)
    .use("/room", roomRouter)
    // ---handel---internal---errors--if--any--occure---
    .use((err, req, res, next) => {
        console.error(err);
        let errorMessage = err.message || "Something went wrong";
        const errorStatus = err.status || 500;

        return res.status(errorStatus).json({
            success: false,
            status: errorStatus,
            message: errorMessage,
        });
    });

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`server is running at port ${port}`))