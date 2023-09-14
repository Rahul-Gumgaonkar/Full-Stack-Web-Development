import React, { useEffect, useState } from "react";

function Hooks() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState(0);

  useEffect(() => {
    console.log(counter, "counter updated");
  }, [counter]);

  useEffect(() => {
    console.log("first time mounted");
  }, []);

  useEffect(() => {
    console.log(name, "name updated");
  }, [name]);

  useEffect(() => {
    console.log("re-render happen");
  });

  return (
    <div>
      <p>{counter}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default Hooks;
