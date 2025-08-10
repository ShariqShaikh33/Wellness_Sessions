import { Router } from "express";
import { publishSession } from "../controllers/Session/publishSession";

export const sessionRouter = Router();

sessionRouter.get("/sessions");
sessionRouter.get("/my-sessions");
sessionRouter.get("/my-sessions/:id");
sessionRouter.post("/my-sessions/save-draft");
sessionRouter.post("/my-sessions/publish",publishSession);
