import {AppContainer} from "react-hot-loader";
import React from "react";
import ReactDOMServer from "react-dom";
import AppRoot from "./components/AppRoot";

const wrapper = document.querySelector("#root")
const render = (Component) => {
    ReactDOMServer.hydrate(
        <AppContainer>
            <Component />
        </AppContainer>,
        wrapper
    );
}

render(AppRoot);

if (module.hot) {
    module.hot.accept(AppRoot, () => {
        const NewAppRoute = AppRoot.default;

        render(NewAppRoute)
    })
}