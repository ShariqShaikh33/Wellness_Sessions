import { Session } from "../../models/session.model.js";

export async function getAllSessions(req,res){
    try{
        const sessions = await Session.find({status:"published"});
        return res.status(200).json({
            success: true,
            data: sessions
        })
    }
    catch(error){
        console.log("Error in Fetching sessions", error);
        res.status(500).json({message: "Internal Server Error"})
    };
}