import express from"express";
import { updateUser,getAllUsers,deleteUser } from "../controller/user.js";
import { authorization } from "../utils/verifyToken.js";
const router =express.Router();
router
.get("/authenticate", authorization, (req, res) => {
    return res.json(req.user);
})
.post("/update",updateUser)
.get("/get",getAllUsers)
.delete("/delete",deleteUser)

export default router;