import express,{json} from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import {connect} from "mongoose";
import { userRouter } from "./routes/index.js";

config();
const app = express();
app.use(json());


connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to the Database");
})
.catch((err)=>{
    console.log("Cannot connect to the Database",err);
});

app.use("/api/user", userRouter);

app.get("/",(req,res)=>{
    res.send("Hello Server");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Connected to port 3000");
})