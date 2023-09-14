import React from "react";

function Head(props) {
  return (
    <div className="top-container">
      <h3 className="left">{props.heading}</h3>
      <h3 className="right">{props.name}</h3>
    </div>
  );
}
export default Head;
