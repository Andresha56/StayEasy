
import 'dotenv/config'
import express from "express";
import { ConnectToDB } from './connection/DataBase.js';
import cors from "cors";
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
server.use(cors());
server.use(express.json());
server
    .use("/auth", authRouter)
    .use("/user", userRouter)
    .use("/hotel", hotelRouter)
    .use("/room", roomRouter)

    // ---handel---internal---errors--if--any--occure---
    .use((err, req, res, next) => {
        console.log(err);
        console.log(errorMessage);
        const errorStaus = err.status || 500;
        return res.status(500).json(
            {
                success: false,
                status: errorStaus,
                message: "Internal server error..."
            }

        );
    })
const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`server is running at port ${port}`))