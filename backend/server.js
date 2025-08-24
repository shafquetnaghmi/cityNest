import express from "express"
import mongoose from "mongoose"
import connectDb from "./config/db.js"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();


const app=express();
app.use(express.json());
app.use(cors);
connectDb()

app.get('/',(req,res)=>{
    res.send("is is working")
})

app.listen(5000)