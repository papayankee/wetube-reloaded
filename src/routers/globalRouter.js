import express from "express";
import {join,login} from "../controllers/userController";
import {trending,search} from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/tredning", trending);
globalRouter.get("/new", globalNew);
globalRouter.get("/login", login);
globalRouter.get("/users", users);

export default globalRouter;