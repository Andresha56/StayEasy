import express from"express";
import { updateUser,getAllUsers,deleteUser } from "../controller/user.js";
import { verifyUser } from "../utils/verifyToken.js";
const router =express.Router();
router
.post("/update/:id",verifyUser,updateUser)
.delete("/delete/:id",verifyUser,deleteUser)
.get("/get",getAllUsers)

export default router;