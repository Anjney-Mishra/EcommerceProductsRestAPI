require("dotenv").config();
const express = require("express");
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");
const {rateLimit} = require("express-rate-limit");

const app = express();

//Rate Limiter
const limiter = rateLimit({
    windowMs: 2*60*1000, // 2 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: "Too many requests from this IP, please try again after 2 minutes"
})

//Middleware
app.use(express.json());
app.use(limiter);
app.use("/api/products",products_routes)


app.get("/",(req,res)=>{
    res.send("Hi Server is live")
})


const PORT = process.env.PORT||5000;
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()