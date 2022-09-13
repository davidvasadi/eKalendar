import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser'; // ez kell a req.body kezeléséhez
import "./models/Account.js";

//ez kell m: mongoose.connect("mongodb+srv://testKal:testKal@cluster0.veozyk4.mongodb.net/?retryWrites=true&w=majority");
// ez csak teszt:
mongoose.connect('mongodb+srv://tut_db_user:M-login576@tutorialcluster.bgnihru.mongodb.net/?retryWrites=true&w=majority');

const app= express();

app.use(cors());
app.use(express.static("templates"));
app.use(express.urlencoded({extended:false})); //->middlerware hogy normálisan átmenjenek az adatok
app.use(express.json());//->middlerware hogy normálisan átmenjenek az adatok

const jsonParser = bodyParser.json(); // ez a json middleware a req.body-hoz


app.get('/', (req, res) => {
    res.send('Itt lesz majd a login');
})

const Account = mongoose.model('accounts');

//reg útvonal
app.post('/api/registration', jsonParser, (req,res) => {
    
    console.log(req.body);


    // itt rakjuk be az infokat a db-be és csinálunk új usert.
    Account.findOne({email: req.body.email}) //elöször megnézzük hogy az email címéval van e már account
    .then(existingAcc => {
        if(existingAcc) {
            res.json({msg: 'Email már regisztrálva'}); //vissza küldünk egy üzit, hogy tudjuk mi van.
        } else {
            new Account({     
                name: req.body.fname,
                email: req.body.email,
                company: req.body.coname,
                password: req.body.pwd  // ezt még ildomos hash-elni 
            })
            .save()  //ha nincs, létrehozzuk db-ben egy új user rekordot a Schema alapján
            .then(account => res.json({msg : 'Fiók regisztrálva: ' + account.email})); // itt is üzi ha sikeres a reg
        }
    }) 
})


console.log("jsok");
const port = process.env.PORT || app.listen(8000);