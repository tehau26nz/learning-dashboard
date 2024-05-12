import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(8);

    return <div>
        <span style={{ fontSize: '40px' }}>{count}</span>
        <button className="btn btn-large" onClick={() => setCount((count) => count + 1)}>
            +1
        </button>
    </div>
}

export default Counter;