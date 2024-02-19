import express from"express";
import { registerUser ,logIn} from "../controller/auth.js";
const router =express.Router();

router
.post("/register",registerUser)
.post("/user/logIn",logIn);

export default router;