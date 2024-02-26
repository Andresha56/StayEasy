import express from"express";
import {createRoom, updateroom,deleteRoom } from "../controller/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router =express.Router();
router
.post("/create/:id",verifyAdmin,createRoom)
.post("/update/:id",verifyAdmin,updateroom)
.delete("/delete/:id/:hotelId",verifyAdmin,deleteRoom)

export default router;