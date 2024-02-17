import { User } from "../model/User.js";

export const registerUser = async (req, res, next) => {
    try {
        const { username, email, password, isAdmin } = req.body;
        User.findOne({ email, username }).then((user) => {
            if (user) {
                //Throw 400 error if the user already exist 
                return res.status(400).json({ success: false, message: "user already exist!" });
            }
            else {
                //crreate a new user
                const newUser = new User({ username, password, email, isAdmin });
                newUser.save();
                return res.status(200).json({ success: true, message: "user created successfully!" })
            }
        })

    } catch (error) {
        next(error)
    };

}