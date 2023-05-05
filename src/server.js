 import express from "express";
 import morgan from "morgan";
 import globalRouter from "./routers/globalRouter";
 import userRouter from "./routers/userRouter";
 import storiesRouter from "./routers/storiesRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/stories", storiesRouter);
app.use("/users", userRouter);

const handleListening = () => 
    console.log(`Listening on http://localhost:${PORT} 😘`);

app.listen(PORT, handleListening);