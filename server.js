import express from "express";
import mongoose from "mongoose";
import { Schema } from "mongoose";
import User from './models/User.js';

mongoose.connect("mongodb+srv://testKal:testKal@cluster0.veozyk4.mongodb.net/?retryWrites=true&w=majority");



const app= express();
app.use(express.static("templates"));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        "heloka":"nyalóka"
    });
    const user = new User({
        name:"teszt Elek",
        email:"tesztelek@gmail",
        password: "kukimuki",
        package: "8"
    }).save();
})


console.log("jsok");
const port = process.env.PORT || app.listen(8000);