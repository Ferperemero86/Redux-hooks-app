import React from "react";
import ReactDOM from "react-dom";

const Test = () => {
    return <h1>This is a test</h1>
};

export default Test;

const wrapper = document.querySelector("#container");

ReactDOM.render(<Test />, wrapper);
