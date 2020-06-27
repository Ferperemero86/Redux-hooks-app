import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import Counter from "./Counter";

//const wrapper = document.querySelector("#root");

//const render = (Component) => {
//    ReactDOM.render(
//        <AppContainer>
//            <Component />
//        </AppContainer>,
//        document.querySelector("#root")
//    );
//}
//
//render(Counter);
//
//if (module.hot) {
//    module.hot.accept(Counter, () => {
//        const NewCounter = Counter.default;
//
//        render(NewCounter)
//    })
//}

const App = () => {
    return (
        <div>
            <Counter />
        </div>
    )
}

export default App;