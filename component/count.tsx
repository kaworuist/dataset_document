import React, { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0)
    return <div>
        <button onClick={() => {setCount(i => i + 1)}}>{count}</button>
    </div>
}

export default Count