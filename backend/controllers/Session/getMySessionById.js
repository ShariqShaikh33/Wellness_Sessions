import { Session } from "../../models/session.model.js";

export async function getMySessionByID(req,res){
    try{
        const _id = req.params.id;
        if(!_id){
            const error = new Error("Session ID is required");
            console.log("Session ID is not provided");
        }
        const sessionByID = await Session.findById({_id});
        return res.status(200).json({
            success: true,
            data: sessionByID
        })
    }
    catch(error){
        console.log("Error in Fetching your session", error);
        res.status(500).json({message: "Internal Server Error"})
    };
}