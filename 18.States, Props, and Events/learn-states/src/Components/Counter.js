// rfce
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function IncrementCount() {
    setCount(count + 1);
  }
  function DecrementCount() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>The value of Count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>
    </div>
  );
}

export default Counter;
