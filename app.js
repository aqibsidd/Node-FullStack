const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const loadRoutes = require('./routes')

const conn = require('./db/conn')

app.use(express.json());

app.use(loadRoutes)

PORT = process.env.PORT || 5500;
HOST =  process.env.HOST || 'localhost';
app.listen(PORT,HOST, async()=>{
    console.log(`App is listing on ${HOST}:${PORT}`);
})