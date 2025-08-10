import { Router } from "express";
import { registerUser } from "../controllers/registerUser.controller.js";
import { loginUser } from "../controllers/loginUser.controller.js";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);