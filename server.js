import express from "express";
import mongoose from "mongoose";

//ez kell neked: mongoose.connect("mongodb+srv://testKal:testKal@cluster0.veozyk4.mongodb.net/?retryWrites=true&w=majority");
// ez csak teszt:
mongoose.connect('mongodb+srv://tut_db_user:M-login576@tutorialcluster.bgnihru.mongodb.net/?retryWrites=true&w=majority');

const app= express();
app.use(express.static("templates"));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Itt lesz majd a login');
})

//reg útvonal
app.get('/api/registration', (req,res) => {
    res.send('Reg kezelés');
})


console.log("jsok");
const port = process.env.PORT || app.listen(8000);