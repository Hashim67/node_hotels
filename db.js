// const mongoose = require('mongoose');
// require('dotenv').config();
// // Define MongoDB connection URL

//  //const mongoUrl = process.env.MONGODB_URL_LOCAL;
//  const mongoUrl = process.env.MONGODB_URL;

// // SetUp MongoDB Connection

// // mongoose.connect(mongoUrl,{
 
// // })

// mongoose.connect(mongoUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     tls: true,  // Use `tls` instead of `ssl`
//     tlsAllowInvalidCertificates: false  // Set to `false` to ensure certificates are validated
//   });
  

// // Mongoose maintain connections 

// const db = mongoose.connection;

// // Define Event Listners for database connection

// db.on('connected', ()=>{
//     console.log('Connected to MongoDB server');
// })

// db.on('error', (error)=>{
//     console.log(' MongoDB connection error:',error);
// })

// db.on('disconnected', ()=>{
//     console.log('MongoDB disconnected');
// })

// // Export the database connection
// module.exports = db;

const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl, {

  ssl: true,
  tlsAllowInvalidCertificates: true  // Use this cautiously
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (error) => {
  console.log('MongoDB connection error:', error);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = db;


