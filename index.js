require('dotenv').config();
const express = require('express')
const port = process.env.PORT || 8000 ;
const app = express();
const db = require('./configs/mongoose')

//use routes/index.js as a base route
app.use('/',require('./routes'))

//app listening on specified port
app.listen(port, (error)=>{
    if(error){
        console.log(`Error in starting the server :  ${error}`)
        return;
    }
    console.log(`Server is running on port : ${port}`)
})