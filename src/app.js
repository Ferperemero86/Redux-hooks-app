import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import Counter from "./components/Counter";

const wrapper = document.querySelector("#root");

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        wrapper
    );
}

render(Counter);

if (module.hot) {
    module.hot.accept(Counter, () => {
        const NewCounter = Counter.default;

        render(NewCounter)
    })
}