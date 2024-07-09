const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: [true,"Price must be provided"],
    },
    featured:{
        type: Boolean,
        default: true,
    },
    rating:{
        type:Number,
        default: 4.9,
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"]
        }
    }


},{timestamps:true})

module.exports = mongoose.model("Product",productSchema);