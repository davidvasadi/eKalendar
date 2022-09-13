import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import "./models/User.js";

//ez kell m: mongoose.connect("mongodb+srv://testKal:testKal@cluster0.veozyk4.mongodb.net/?retryWrites=true&w=majority");
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

const User = mongoose.model('accounts');

//reg útvonal
app.post('/api/registration', (req,res) => {
    console.log(req.body);

    // itt rakjuk be az infokat a db-be és csinálunk új usert.
    User.findOne({email: req.body.email}) //elöször megnézzük hogy az email címéval van e már account
    .then(existingUser => {
        if(existingUser) {
            console.log(existingUser);
        } else {
            new User({     
                name: req.body.fname,
                email: req.body.email,
                company: req.body.coname,
                password: req.body.pwd  // ezt még ildomos hash-elni 
            })
            .save()  //ha nincs, létrehozzuk db-ben egy új user rekordot a Schema alapján
            .then(user => console.log(user));
        }
    })
})


console.log("jsok");
const port = process.env.PORT || app.listen(8000);