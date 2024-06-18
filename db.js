const mongoose = require('mongoose');

// Define MongoDB connection URL
const mongoUrl = 'mongodb://localhost:27017/hotels' 

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