import express from "express";
import path from "path";

const server = express();

const staticMiddleWare = express.static("dist");

server.use(staticMiddleWare);

server.listen(8080, () => {
    console.log("Server is listening");
})