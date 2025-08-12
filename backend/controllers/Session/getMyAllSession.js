import { Session } from "../../models/session.model.js";

export async function getMyAllSession(req,res){
    try{
        const sessions = await Session.find({user_id});
        return res.status(200).json({
            success: true,
            data: sessions
        })
    }
    catch(error){
        console.log("Error in Fetching your session", error);
        res.status(500).json({message: "Internal Server Error"})
    };
}