import express from "express";
import mongoose from "mongoose";
import router from "./routes/book.js";



const app = express()

app.use(express.json())

const connection = mongoose.connection

connection.once("connected",()=>console.log("Database connected"))
connection.on("error",(error)=>console.log("Database connection error",error))


mongoose.connect("mongodb://127.0.0.1:27017/BasicCode",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use("/book",router)

app.listen(3000,()=>{
    console.log('App is running on 2000 port')
})