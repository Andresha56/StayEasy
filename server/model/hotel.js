import mongoose from "mongoose";
const { Schema } = mongoose;

export const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    LocationType: {
        type: [String],
        required:true
    },
    featuredImage: {
        type: String,
        required:true
    },
    images: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        min: 0, 
        max: 5
    },
    summary:{
        type: String,
        required:true
    },
    aminities:{
        type:[String],
    },
    rooms: { 
        type: [String] 
    },
    reviews:{
        type: [String] 
    },
    cheapestPrice: { 
        type: Number 
    }
});

export const Hotel = mongoose.model("hotel", hotelSchema);
