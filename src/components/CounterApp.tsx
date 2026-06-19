
import { useState } from "react"

function Counter(){

const [count, setCount] = useState(0);

const increaseCount = () => {
    setCount(count + 1)
}

const resetCount = () => {
    setCount(0)
}

const decreaseCount = () => {
    setCount(count - 1)
}


    return(
        <div className="container">
            <div className="count">
                <h1>{count}</h1>
            </div>
            <div className="btnSwitch">
                <button onClick={increaseCount}>INCREASE</button>
                <button onClick={resetCount}>RESET</button>
                <button onClick={decreaseCount}>DECREASE</button>
            </div>  
        </div>
        
    )
}

export default Counter