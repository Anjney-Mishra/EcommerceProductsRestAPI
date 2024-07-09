const Product = require("../models/product")

const getAllProducts = async(req,res)=>{
    const queryObject = {};//if something else written which is not present then this fetch all the products
    const {company,name,featured} = req.query;

    if(company) queryObject.company=company;
    if(featured) queryObject.featured=featured;
    if(name) queryObject.name={$regex:name,$options:"i"}//i - caseinsensitive (mogoDB regex)

    const productData = await Product.find(queryObject);
    res.status(200).json({productData});
}

module.exports = {getAllProducts}