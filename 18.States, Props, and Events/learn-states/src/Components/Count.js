import React, { useState } from "react";

function Count(props) {
  const [CountInChild, SetCountInChild] = useState(0);

  function updateCount() {
    SetCountInChild(CountInChild + 1);
    props.onCountUpdate(CountInChild + 1);
  }

  return (
    <div>
      <p>Increment Count in Child : {CountInChild}</p>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
}

export default Count;
