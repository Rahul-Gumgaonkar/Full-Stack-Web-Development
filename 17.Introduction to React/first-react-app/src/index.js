import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Card from "./Component/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function myClock() {
//   root.render(<p>{new Date().toLocaleTimeString()}</p>);
//   setTimeout(myClock, 1000);
// }

// myClock();

// const name = (
//   <div>
//     <h1>This is a heading{5 + 5}</h1>
//   </div>
// );

// root.render(name);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
