
import mongoose from "mongoose";
import { Schema } from "mongoose";

const accSchema = new Schema({
    name: String,
    email: String,
    company: String,
    password: String
});

mongoose.model('accounts', accSchema);