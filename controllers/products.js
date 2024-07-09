const Product = require("../models/product")

const getAllProducts = async(req,res)=>{
    const productData = await Product.find({});//get all product from db
    res.status(200).json({productData});
}

module.exports = {getAllProducts}