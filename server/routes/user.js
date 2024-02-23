import express from"express";
import { updateUser,getAllUsers,deleteUser } from "../controller/user.js";
import { authorization } from "../utils/verifyToken.js";
import { verifyUser } from "../utils/verifyToken.js";
const router =express.Router();
router
.get("/authenticate", authorization, (req, res) => {
    return res.json(req.user);
})
// .get("/checkUser/:id", verifyUser, (req, res) => {
//     res.send("Hello, you are authorized");
// })
.post("/update/:id",verifyUser,updateUser)
.delete("/delete/:id",verifyUser,deleteUser)
.get("/get",getAllUsers)

export default router;