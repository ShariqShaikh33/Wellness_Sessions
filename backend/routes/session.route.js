import { Router } from "express";
import { draftSession, getAllSessions, getMyAllSession, getMySessionByID, publishSession } from "../controllers/Session/index.js";

export const sessionRouter = Router();

sessionRouter.get("/sessions",getAllSessions);
sessionRouter.get("/my-sessions", getMyAllSession);
sessionRouter.get("/my-sessions/:id",getMySessionByID);
sessionRouter.post("/my-sessions/save-draft",draftSession);
sessionRouter.post("/my-sessions/publish",publishSession);
