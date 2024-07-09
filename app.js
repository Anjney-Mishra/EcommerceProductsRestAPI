const express = require("express");
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

const app = express();


app.get("/",(req,res)=>{
    res.send("Hi Server is live")
})

app.use("/api/products",products_routes)

const PORT = process.env.PORT||5000;
const start = async() => {
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()