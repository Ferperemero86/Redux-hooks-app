import React from "react";
import ReactDOM from "react-dom";

const Test = () => {
    return <h1 className="test">Testing</h1>;
}

const wrapper = document.querySelector("#root");

ReactDOM.render(<Test />, wrapper);