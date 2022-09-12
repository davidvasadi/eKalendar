import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

//ez kell neked: mongoose.connect("mongodb+srv://testKal:testKal@cluster0.veozyk4.mongodb.net/?retryWrites=true&w=majority");
// ez csak teszt:
mongoose.connect('mongodb+srv://tut_db_user:M-login576@tutorialcluster.bgnihru.mongodb.net/?retryWrites=true&w=majority');

const app= express();

app.use(cors());
app.use(express.static("templates"));
app.use(express.urlencoded({extended:false})); //->middlerware hogy normálisan átmenjenek az adatok
app.use(express.json());//->middlerware hogy normálisan átmenjenek az adatok


app.get('/', (req, res) => {
    res.send('Itt lesz majd a login');
})

//reg útvonal
app.post('/api/registration', (req,res) => {
    console.log(req.body);
    res.json({
        fname: req.body.fname,
        email: req.body.email,
        coname: req.body.coname,
        pwd: req.body.pwd
    });
})


console.log("jsok");
const port = process.env.PORT || app.listen(8000);