import express from "express";
import {edit, see} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(":id", see);
userRouter.get("/edit-profile", edit);

export default userRouter;