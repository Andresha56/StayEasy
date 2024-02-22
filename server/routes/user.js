import express from"express";
import { updateUser,getAllUsers,deleteUser } from "../controller/user.js";
const router =express.Router();

router
.post("/update",updateUser)
.get("/get",getAllUsers)
.delete("/delete",deleteUser)

export default router;