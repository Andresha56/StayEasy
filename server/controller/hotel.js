import { Hotel } from "../model/hotel.js"
import mongoose from "mongoose";
//create
export const create = async (req, res,next) => {
    try {
        const new_hotel = req.body;
        console.log(new_hotel);
        //destrucute 
        const {
            name,
            address,
            city,
            distance,
            image,
            rating,
            rooms,
            cheapestPrice
        } = req.body;

        await Hotel.create({ name, address, city, distance, image, rating, rooms, cheapestPrice });
        res.status(200).json({success: true });
    }
    catch (error) {
        next(error);

    }
}

//update


export const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newData = req.body;

        // Validate if id is a valid ObjectId before attempting to update
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const updatedHotel = await Hotel.findByIdAndUpdate(id, newData, { new: true });

        if (!updatedHotel) {
            return res.status(404).json({ error: "Hotel not found" });
        }

        return res.status(200).json({ success: true , data: updatedHotel });
    }
    catch (error) {
        next(error);

    }
};

//Delete

export const del = async (req, res,next) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid id" });
        }
        await Hotel.findByIdAndDelete(id);
        res.status(200).json({ success: true  })
    }
    catch (error) {
        next(error);
        
    }
}

//Get all 
export const getAll = async (req, res,next) => {
    try {
        const Hotels = await Hotel.find({});
        res.status(200).json(Hotels);
    }
    catch (error) {
        next(error);
        
    }
}