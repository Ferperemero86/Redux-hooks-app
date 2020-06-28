import React from "react";
import {hot} from 'react-hot-loader/root';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Routes from "./Routes";

const AppRoot = () => {
    return (
        <Router>
            <Routes />
        </Router>
    )
}

export default hot(AppRoot);

