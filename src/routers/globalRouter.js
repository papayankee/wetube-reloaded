import express from "express";
import {home} from "../controllers/globalController";
import {join, users, login} from "../controllers/userController";
import {trending, globalNew} from "../controllers/storiesController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", globalNew);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/users", users);

export default globalRouter;