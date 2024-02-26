import { Room } from "../model/Room.js";
import createError from 'http-errors';
import mongoose from "mongoose";
import { Hotel } from "../model/hotel.js";
//create
export const createRoom = async (req, res, next) => {
    const {id} = req.params;
    try {
        try {
            await Room.findById(id);
            //check id is invalid or not
        } catch {
            next(createError(404, "Invalid id"));
        }
        //create new room
        const { title, price, max_people, avilable, roomNumber, description, image } = req.body;
        const newRoom = new Room({ title, price, max_people, avilable, roomNumber, description, image });
        await newRoom.save();
        //save the room id to room db 
        const check =await Hotel.findByIdAndUpdate(id, { $push: { rooms: newRoom._id } });
        console.log(check);
        res.status(201).json({ message: "Room created successfully" });

    } catch (error) {
        next(error);
    }
}


//update
export const updateroom = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        // Validate if id is a valid ObjectId before attempting to update
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        const updatedroom= await Room.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedroom) {
            return res.status(404).json({ error: "room not found" });
        }
        return res.status(200).json({ success: true , data: updatedroom });
    }
    catch (error) {
        next(error);
    }
};



//delete
export const deleteRoom = async (req, res,next) => {
    try {
        const roomId = req.params.id;
        const hotelId=req.params.hotelId;
        if (!mongoose.Types.ObjectId.isValid(roomId)&&!mongoose.Types.ObjectId.isValid(hotelId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        await Room.findByIdAndDelete(roomId);
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:roomId}})
        }
        catch(error){next(error)}
        res.status(200).json({ success: true  })
    }
    catch (error) {
        next(error);
        
    }
}

