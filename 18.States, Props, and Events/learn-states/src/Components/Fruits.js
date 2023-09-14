import React, { useState } from "react";

function Fruits() {
  // const [fruit, setfruit] = useState("Apple");
  // const [inputText, setInputText] = useState("");
  // function update() {
  //   setfruit(inputText);
  // }
  // function updateInputText(event) {
  //   const curInputValue = event.target.value;
  //   setInputText(curInputValue);
  // }
  // return (
  //   <div>
  //     <p>Name of Fruit is : {inputText}</p>
  //     <input type="text" onChange={updateInputText} />
  //     <button onClick={update}>Papaya</button>
  //     <button onClick={() => setfruit("mango")}>Mango</button>
  //     <button onClick={() => update()}>Submit</button>
  //   </div>
  // );
  const [fruit, setFruit] = useState("");
  return (
    <div>
      <p>Name of fruit is : {fruit}</p>
      <input type="text" onChange={(e) => setFruit(e.target.value)} />
      <button onClick={() => setFruit("Papaya")}>Papaya</button>
      <button onClick={() => setFruit("Apple")}>Apple</button>
      <button onClick={() => setFruit("Mango")}>Mango</button>
    </div>
  );
}

export default Fruits;
