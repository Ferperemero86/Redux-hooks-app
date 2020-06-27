import express from "express";
import path from "path";

const server = express();
const webpack = require("webpack");
const webpackHotServerMiddleware = require("webpack-hot-server-middleware");

const configDevClient = require("../../config/webpack.dev-client");
const configDevServer = require("../../config/webpack.dev-server");
const configProdClient = require("../../config/webpack.prod-client");
const configProdServer = require("../../config/webpack.prod-server");


const isProd = process.env.NODE_ENV === "production";

if(!isProd) {
    const compiler = webpack([configDevClient, configDevServer]);

    const clientCompiler = compiler.compilers[0];
    const serverCompiler = compiler.compilers[1];

    //Allows to get the files emitted from webpack in server.
    const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, configDevClient.devServer);
    //Allows instant changes reload in App from server
    const webpackHotMiddleware = require("webpack-hot-middleware")(clientCompiler, configDevClient.devServer);

    server.use(webpackDevMiddleware);
    //Hot middleware needs to be after devMiddleare and
    //Before staticMiddleware to work
    server.use(webpackHotMiddleware);
    server.use(webpackHotServerMiddleware(compiler));
} else {
    const render = require("./render");

    const expressStaticGzip = require("express-static-gzip");
    server.use(expressStaticGzip("dist", {
        enableBrotli: true
    }));

    server.use(render()); 
}

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is listening in ${PORT}`);
})