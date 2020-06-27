import React from "react";
import {hot} from 'react-hot-loader/root';

import Counter from "../components/Counter";

const AppRoot = () => {
    return (
        <Counter />
    )
}

export default hot(AppRoot);

