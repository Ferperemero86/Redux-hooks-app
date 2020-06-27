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
            <h1 className="test">Testi</h1>
            <button onClick={updateState}>Change state</button>
        </div>
    )
}

export default Counter;