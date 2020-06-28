import React from "react";
import ReactDOMServer from "react-dom/server";
import {StaticRouter} from "react-router";
import Routes from "../components/Routes";

export default () => (req, res) => {
    res.send(`
        <html>
            <head>
                <link href="style.css" rel="stylesheet">
            </head>
            <body>
                <div id="root">${ReactDOMServer.renderToString(
                    <StaticRouter location={req.url} context={{}}>
                        <Routes />
                    </StaticRouter>
                )}</div>
                <script src="main-bundle.js"></script>
            </body>
        </html>
    `)
}