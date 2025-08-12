import { Session } from "../../models/session.model.js";

export async function draftSession(req,res){
    try{
        const session= req.body;
        
        const newSession = new Session(session);
        newSession.status = "draft";
        
        await newSession.save();
        console.log("Drafting session");
        return res.status(201).json({
            success: true,
            session,
        });
    }
    catch(error){
        console.log("Error in drafting session", error);
        res.status(500).json({message: "Internal Server Error"})

    };
};