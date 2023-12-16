require('dotenv').config()
const mongoose = require('mongoose');

//connecting our mongodb to our url
mongoose.connect(process.env.MONGODB_URL);
//storing our mongoose connection in "db" variable
const db = mongoose.connection
//if there is an error in connecting to the database
db.on('error',console.error.bind(console,'error'));
//if the connection to the database is successfully made
db.once('open',()=>{console.log(`Connection to MongoDB successfull!`)})

module.exports = db;