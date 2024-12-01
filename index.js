const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const router = require('./routes')

app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("https://ecommerce-backend-1-7rjc.onrender.com/api",router)

const PORT = 8080 || process.env.PORT;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
