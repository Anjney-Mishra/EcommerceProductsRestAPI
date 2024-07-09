const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/ecommerceprodutapi";

const connectDB = () => {
    console.log("DB Connect")
    return mongoose.connect(URI)
}

module.exports = connectDB;