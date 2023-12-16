const mongoose = require('mongoose');
//defining the schema for our product model
const productSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

//exporting our Product model
module.exports = mongoose.model('Product',productSchema)