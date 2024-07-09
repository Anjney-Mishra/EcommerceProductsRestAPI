const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const queryObject = {}; //if something else written which is not present then this fetch all the products
  const { company, name, featured, sort, select } = req.query;

  if (company) queryObject.company = company;
  if (featured) queryObject.featured = featured;
  if (name) queryObject.name = { $regex: name, $options: "i" }; //i - caseinsensitive (mogoDB regex)

  //sorting
  let apiData = Product.find(queryObject);
  if (sort) {
    //http://localhost:5000/api/products?sort=name,price
    //we want .sort(name price)
    //.sort(price)  - ascending sort
    //.sort(-price)  - descending sort
    let sortfix = sort.split(",").join(" ");
    apiData = apiData.sort(sortfix);
  }
  if (select) {
    //http://localhost:5000/api/products?select=name,price
    //we want .select(name price)
    let selectfix = select.split(",").join(" ");
    apiData = apiData.select(selectfix);
  }
  const productData = await apiData;
  res.status(200).json({ productData });
};

module.exports = { getAllProducts };
