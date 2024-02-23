import express from"express";
import { verifyUser } from "../utils/verifyToken.js";
import { create,update,del,getAll } from "../controller/hotel.js";
const router =express.Router();
router
.post("/register",verifyUser,create)
.post("/update/:id",verifyUser,update)
.delete("/delete/:id",verifyUser,del)
.get("/get/all/data",getAll)


export default router;