import React from "react";
import ReactDOMServer from "react-dom/server";

import AppRoot from "../components/AppRoot";


export default () => (req, res) => {
    res.send(`
        <html>
            <head>
                <link href="style.css" rel="stylesheet">
            </head>
            <body>
                <div id="root">${ReactDOMServer.renderToString(<AppRoot />)}</div>
                <script src="main-bundle.js"></script>
            </body>
        </html>
    `)
}