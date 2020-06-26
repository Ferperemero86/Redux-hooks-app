import express from "express";
import path from "path";
const server = express();

const isProd = process.env.NODE_ENV === "production";

if(!isProd) {
    const webpack = require("webpack");
    const config = require("../../config/webpack.dev");
    const compiler = webpack(config);

    //Allows to get the files emitted from webpack in server.
    const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, config.devServer);
    //Allows instant changes reload in App from server
    const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

    server.use(webpackDevMiddleware);
    //Hot middleware needs to be after devMiddleare and
    //Before staticMiddleware to work
    server.use(webpackHotMiddleware);
}

//const staticMiddleWare = express.static("dist");
//server.use(staticMiddleWare);
const expressStaticGzip = require("express-static-gzip");
server.use(expressStaticGzip("dist"));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is listening in ${PORT}`);
})