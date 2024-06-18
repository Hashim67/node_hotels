const mongoose = require('mongoose');
require('dotenv').config();
// Define MongoDB connection URL

// const mongoUrl = process.env.MONGODB_URL_LOCAL;
const mongoUrl = process.env.MONGODB_URL;

// SetUp MongoDB Connection

mongoose.connect(mongoUrl,{
 
})

// Mongoose maintain connections 

const db = mongoose.connection;

// Define Event Listners for database connection

db.on('connected', ()=>{
    console.log('Connected to MongoDB server');
})

db.on('error', (error)=>{
    console.log(' MongoDB connection error:',error);
})

db.on('disconnected', ()=>{
    console.log('MongoDB disconnected');
})

// Export the database connection
module.exports = db;