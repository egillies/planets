import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name: { type: String, required: true, maxlength: 50 },
    stars: { type: Number, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })