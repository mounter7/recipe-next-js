import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    id: String,
    fav: String,
    img: String,
    title: String,
    ingredients: String,
    Preparation: String
})

export const ItemModel = mongoose.models.items || mongoose.model('items', itemSchema)
