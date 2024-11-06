import { useState } from "react"


//state
const Counter = () => {
    // define state
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Count: {count}</p>
            {/* Update state */}
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            
        </div>
    )
}

export default Counter;