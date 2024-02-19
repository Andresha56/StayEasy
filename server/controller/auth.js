import { Users } from "../model/Users.js";
import bcryptjs from "bcryptjs";
import createError from 'http-errors';
//register new user 
export const registerUser = (req, res, next) => {
    try {
        const { username,email, password, isAdmin } = req.body;
        Users.findOne({ username,email }).then(async(user) => {
            if (user) {
                //Throw 400 error if the user already exist 
                return res.status(400).json({ success: false, message: "user already exist!" });
            }
            else {
                //hash user password before saving 
                const saltRounds = 10;
                const hashPassword=await bcryptjs.hash(password,saltRounds);

                //crreate a new user
                const newUser = new Users({username, password:hashPassword, email, isAdmin });
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
        const user = await Users.findOne({ username:username });
        console.log(user);
        if (!user) next(createError(404, "User not found!"));
        const conformpassword=await bcryptjs.compare(password,user.password);
        if(!conformpassword)next(createError(404,"userlname or password is incorrect!"))

    } catch (error) {
        next(error);
    }
};