import React, { useState } from 'react'

const Counter = () => {
    let [arr, newArr] = useState([1,2,3,"Qari"]);
    arr.push("shamir");
    console.log(arr);
    
    let [count, newCount] = useState(0);
    console.log(count);
    const increase = () => {
        console.log("increasing........");
        newCount(count + 1);
    }
    const decrease = () => {
        console.log("decreasing........");
        newCount(count - 1);
    }
    const jumpByFive = () => {
        console.log("decreasing........");
        newCount(count + 5);
    }
    return (
        <div>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={jumpByFive}>Increase by 5</button>
        </div>
    )
    return (
        <div>

        </div>
    )
}

export default Counter
