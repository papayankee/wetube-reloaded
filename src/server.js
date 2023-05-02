 import express from "express";

 const PORT = 4000;

 const app = express();

 const handleHome = (req, res) => {
    return res.end();
};
const handleLogin = (req, res) => {
    return res.send("Login here.");
};

 app.get("/", handleHome);
 app.get("/login", handleLogin);

 const handleListening = () => 
    console.log(`Listening on http://localhost:${PORT} 😘`);

 app.listen(PORT, handleListening);