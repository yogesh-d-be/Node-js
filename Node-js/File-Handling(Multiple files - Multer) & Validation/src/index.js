const mongoose = require('mongoose');
const server = require('./app');// import server from app.js
require('dotenv').config(); // Used to load the env variables from .env file

const mongodb_uri = process.env.MONGODB_URI
const port = process.env.PORT


mongoose.connect(mongodb_uri).then(()=>{
    server.listen(port,()=>{
        console.log(`Server is running on ${port}`);
    })
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log("Mongodb error", err)
})