import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const updateState = (e) => {
        e.preventDefault();

        setCount(count + 1);
    }

    return (
        <div className="counter">
            <div>
                <p>Counter: {count}</p>
            </div>
            <h1 className="test">Test</h1>
            <button onClick={updateState}>Change state</button>
            <img src="images/ps5.jpg" />
        </div>
    )
}

export default Counter;