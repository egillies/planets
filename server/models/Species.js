import { Schema } from "mongoose";

export const SpeciesSchema = new Schema({
    name: { type: String, required: true, maxlength: 100 }
}, { timestamps: true, toJSON: { virtuals: true } })