import express,{json} from "express";
import { config } from "dotenv";
import {connect} from "mongoose";
import { sessionRouter, userRouter } from "./routes/index.js";
import cors from "cors";

config();
const app = express();
app.use(json());
app.use(cors());


connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to the Database");
})
.catch((err)=>{
    console.log("Cannot connect to the Database",err);
});

app.use("/api/user", userRouter);
app.use("/api/session",sessionRouter);

app.get("/",(req,res)=>{
    res.send("Hello Server");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Connected to port 3000");
})