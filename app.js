const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hi Server is live")
})
const PORT = process.env.PORT||5000;
const start = async() => {
    try {
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()