import { useState } from "react";
import "./App.css";
import Count from "./Components/Count";
import Counter from "./Components/Counter";
import Fruits from "./Components/Fruits";
import Hooks from "./Components/Hooks";
import NewsApp from "./Components/NewsApp";
import Notes from "./Components/Notes";
import UserForm from "./Components/UserForm";
import Child2 from "./Components/Child2";

function App() {
  const [countInParent, SetCountInParent] = useState(0);

  function UpdateInParent(count) {
    SetCountInParent(count);
  }

  return (
    <div>
      {/* <Counter /> */}
      {/* <Fruits /> */}
      {/* <Notes /> */}

      {/* <p>Increment the count in parent: {countInParent}</p>
      <Count onCountUpdate={UpdateInParent} />
      <Child2 countFromParent={countInParent} /> */}
      {/* <UserForm /> */}
      {/* <Hooks /> */}
      <NewsApp />
    </div>
  );
}

export default App;
