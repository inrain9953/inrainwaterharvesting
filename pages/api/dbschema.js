import mongoose from "mongoose";

const productionModel = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    message:String,
});

export const Product = mongoose.models?.inrainwaterharvesting || mongoose.model("inrainwaterharvesting", productionModel)