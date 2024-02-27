import { Users } from "../model/Users.js";
import createError from 'http-errors';
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { omitPassword } from "../utils/hidePassword/omitPssword.js";
import { hashPassword } from "../utils/hashPassword/hashPassword.js";
//register new user 
export const registerUser = (req, res, next) => {
    try {
        const { username, email, password, isAdmin } = req.body;
        Users.findOne({ $or: [{ username }, { email }] }).then(async (user) => {
            //Throw 400 error if the user already exist 
            if (user) next(createError(400, "user already exist!"));
            else {
                //hash user password before saving 
                const hashedPassword=await hashPassword(password);
                //create a new user
                const newUser = new Users({ username, password: hashedPassword, email, isAdmin });
                newUser.save();
                return res.status(200).json({ success: true, message: "user created successfully!" })
            }
        })
    } catch (error) {
        next(error)
    };
}

//log in register user 
export const logIn = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const IsUser = await Users.findOne({ username: username });

        if (!IsUser) next(createError(404, "username or password is incorrect"));
        //decode password
        const isPasswordValid = await bcryptjs.compare(password, IsUser.password);
        if (!isPasswordValid) next(createError(404, "userlname or password is incorrect!"));
        // ---apply--jwt__tokn-----
        const secrate = process.env.JWT_SECRATE;
        const token = jwt.sign({ id: IsUser._id, isAdmin: IsUser.IsAdmin }, secrate);
        // Omit password from user details
        const user = omitPassword(IsUser);
        return res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({user, success:true ,message:'logIn successful!'});
    } catch (error) {
        next(error);
    }
};