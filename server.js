const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
//env config
dotenv.config();

//routes import
const productRoutes = require('./routes/productRoutes')

//mongodb connection
connectDB();
//rest object 
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//routes
app.use("/api/v1/product",productRoutes);

//port 
const PORT = process.env.PORT||8080;

//listen
app.listen(8080,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan.white);
})

