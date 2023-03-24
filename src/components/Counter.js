import React, { useState } from 'react';
import "./Counter.css"

const Counter = () => {
    let [count, setCount] = useState(0);
    function increaseValue(){
        count = count + 1;
        setCount(count)
    };
    return (
        <div className='counter'>
            hello from counter!
            <h1>{count}</h1>
            <button onClick={increaseValue}>increase</button>
        </div>
    );
};

export default Counter;