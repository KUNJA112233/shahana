require ('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const API =require('./routes/portfolioroute')
    cons
    const app = express();
    app.get('/',(req,res) => {res.send('hello')})


mongoose.connect('mongodb+srv://hello:kunjaaa@cluster0.otevv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> {
    console.log('connected to MongoDB')
})
.catch((err) => console.log(err));
const env = process.env;
const app = express()
app.get('/',(req,res) => {res.send('Hello')}) 

app.listen(env.PORT, () => {console.log('listening on port 3000')})