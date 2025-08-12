import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { User } from "../../models/user.model.js";

config();
export async function registerUser(req,res) {
    const {email, password} = req.body;

    try{

        if(!email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        if(password.length<6){
            return res.status(400).json({message: "Password must contain atleast 6 characters."})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message: "Email already exists"
            });
        }

         const newUser = await User.create({
            email,
            password
         });

         const token = jwt.sign({userId:newUser._id},process.env.JWT_SECRET_KEY, {
            expiresIn: "7d"
         });

         res.cookie("jwt",token,{
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict", 
            secure: process.env.NODE_ENV === "production"
         });

         res.status(201).json({success: true,user: newUser ,message: "User is created"});
    }
    catch(error){
        console.log("Error in registering user", error);
        res.status(500).json({message: "Internal Server Error"})
    }
}