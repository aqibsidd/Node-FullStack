const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

let db = process.env.DB

mongoose.connect(db)
.then(data=>{
    console.log('Connect')
}).catch(err => console.log('Error'));