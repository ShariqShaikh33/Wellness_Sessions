import { Session } from "../../models/session.model.js";

export async function publishSession(req,res){
    try{
        const session= req.body;
        
        const newSession = new Session(session);
        newSession.status = "published";
        
        await newSession.save();
        console.log("Publishing sessions");
        return res.status(201).json({
            success: true,
            session,
        });
    }
    catch(error){
        console.log("Error in publishing session", error);
        res.status(500).json({message: "Internal Server Error"})
    };
};