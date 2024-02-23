import { Users } from "../model/Users.js";
import bcryptjs from "bcryptjs";
import createError from 'http-errors';
import jwt from "jsonwebtoken";
//register new user 
export const registerUser = (req, res, next) => {
    try {
        const { username, email, password, isAdmin } = req.body;
        Users.findOne({ username, email }).then(async (user) => {
            //Throw 400 error if the user already exist 
            if (user) next(createError(400, "user already exist!"));
            else {
                //hash user password before saving 
                const saltRounds = 10;
                const hashPassword = await bcryptjs.hash(password, saltRounds);

                //create a new user
                const newUser = new Users({ username, password: hashPassword, email, isAdmin });
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
        const user = await Users.findOne({ username: username });

        if (!user) next(createError(404, "User not found!"));
        //decode password
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) next(createError(404, "userlname or password is incorrect!"));
        // ---apply--jwt__tokn-----
        const secrate = process.env.JWT_SECRATE;
        const token = jwt.sign({ id: user._id, isAdmin: user.IsAdmin }, secrate);
        console.log(token)
        // Omit password from user details
        const { password: omitPassword, ...showDetailsWithoutPassword } = user._doc;
        return res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({showDetailsWithoutPassword, message: "Logged in. Nice work." });
    } catch (error) {
        next(error);
    }
};