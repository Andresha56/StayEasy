
import { Users } from "../model/Users.js";


//update user
export const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newData = req.body;

        // Validate if id is a valid ObjectId before attempting to update
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID" });
        }

        const user = await Users.findByIdAndUpdate(id, newData, { new: true });

        if (!user) {
            return res.status(404).json({ error: "user not found" });
        }

        return res.status(200).json({ success: true , data: updatedUsers });
    }
    catch (error) {
        next(error);

    }
};

//Delete users

export const deleteUser = async (req, res,next) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        await Users.findByIdAndDelete(id);
        res.status(200).json({ success: true  })
    }
    catch (error) {
        next(error);
        
    }
}

//Get all users
export const getAllUsers = async (req, res,next) => {
    try {
        const users = await Users.find({});
        // Omit password from user details
        const usersWithoutPassword=users.map((user)=>{
            const {password,...otherUserDetailsExceptPassword}=user._doc;
            return otherUserDetailsExceptPassword;
        })
        console.log(usersWithoutPassword);
        res.status(200).json(usersWithoutPassword);
    }
    catch (error) {
        next(error);
        
    }
}