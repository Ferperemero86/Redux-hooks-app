import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../components/App";


export default () => (req, res) => {
    res.send(`
        <html>
            <head>
                <link href="style.css" rel="stylesheet">
            </head>
            <body>
                <div id="root">${ReactDOMServer.renderToString(<App />)}</div>
            </body>
        </html>
    `)
}