
import mongoose from "mongoose";
import { Schema } from "mongoose";



const userSchema = new Schema({
    name: String,
    email: String,
    company: String,
    password: String,
    package: String
});

module.exports = mongoose.model('users', userSchema);