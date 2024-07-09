require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJSON = require("./productdata.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.create(ProductJSON);
        console.log("Successfully Added JSON data")
    } catch (error) {
        console.log(error)
    }
}

start();
