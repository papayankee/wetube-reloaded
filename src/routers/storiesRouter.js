import express from "express";
import {see, edit, deleteStories} from "../controllers/storiesController";

const storiesRouter = express.Router();

storiesRouter.get("/:id(\\d+)", see);
storiesRouter.get("/:id(\\d+)/edit", edit);
storiesRouter.get("/:id(\\d+)/delete", deleteStories);

export default storiesRouter;