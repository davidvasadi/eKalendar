
import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    company: String,
    password: String,
    package: String
});

mongoose.model('users', userSchema);