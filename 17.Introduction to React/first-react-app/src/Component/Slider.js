import React from "react";
import Slider2 from "./Slider2";

function Slider(props) {
  return (
    <div className="slider-container">
      <h2>{props.heading}</h2>
      <p>{props.para}</p>
      <Slider2 content={props.content} />
    </div>
  );
}

export default Slider;
