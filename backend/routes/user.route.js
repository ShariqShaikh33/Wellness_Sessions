import { Router } from "express";
import { loginUser, registerUser } from "../controllers/User/index.js";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);