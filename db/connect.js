const mongoose = require("mongoose");


const connectDB = (URI) => {
    console.log("DB Connect")
    return mongoose.connect(URI)
}

module.exports = connectDB;