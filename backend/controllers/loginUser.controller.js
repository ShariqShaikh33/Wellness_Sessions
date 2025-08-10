import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function loginUser(req,res) {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Both the fields are required."});
        };

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message: "Invalid email or password"});
        }

        const isPasswordCorrect = await user.matchPassword(password);
        if(!isPasswordCorrect){
            return res.status(401).json({message: "Invalid email or password"});
        }


        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY, {
            expiresIn: "7d"
        });

        res.cookie("jwt",token,{
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict", 
            secure: process.env.NODE_ENV === "production"
        });

        res.status(200).json({sucess: true, user});
    }
    catch(error){
        console.log("Error during Login", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}