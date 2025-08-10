import { Session } from "../../models/session.model";

export async function publishSession(req,res){
    try{
        const newSession = new Session(req.body);
        await newSession.save();
        return res.status(201).json({
            success: true,
            assessment,
        });
    }
    catch(e){
        const error = new Error("Failed to Publish your session",{
            cause: e
        });
    };
};