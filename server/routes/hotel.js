import express from"express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { create,update,deleteHotel,getAll } from "../controller/hotel.js";
const router =express.Router();
router
.post("/register",create)
.post("/update/:id",verifyAdmin,update)
.delete("/delete/:id",verifyAdmin,deleteHotel)
.get("/get/all/data",getAll)


export default router;