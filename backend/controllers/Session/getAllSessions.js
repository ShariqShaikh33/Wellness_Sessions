import { Session } from "../../models/session.model";

export async function getAllSessions(req,res){
    try{
        const sessions = await Session.find({status:"published"});
        return res.status(200).json({
            success: true,
            data: sessions
        })
    }
    catch(e){
        const error = new Error("Failed to fetch Session data",{
            cause: e,
        })
        return error;
    }
}