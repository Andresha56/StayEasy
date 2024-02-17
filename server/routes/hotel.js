import express from"express";
import { create,update,del,getAll } from "../controller/hotel.js";
const router =express.Router();
router
.post("/register",create)
.post("/update/:id",update)
.delete("/delete/:id",del)
.get("/get/all/data",getAll)


export default router;