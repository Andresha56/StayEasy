

import mongoose from "mongoose";
const { Schema } = mongoose;
export const hotelSchema = new Schema({
    name:
    {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        // required: true
    },
    images: {
        type: [String],
        required: true
    },
    description: {
        type: String,
    },
    rating: {
        type: Number,
        min: 0, max: 5
    },
    rooms: { type: [String] },
    cheapestPrice: { type: Number },


})

export const Hotel=mongoose.model("hotel",hotelSchema);