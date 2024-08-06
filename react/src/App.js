import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <Counter count={count} onIcrement={incrementCount} />
    </div>
  )
}

export default App
