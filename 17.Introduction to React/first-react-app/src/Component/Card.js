import React from "react";

function Card(props) {
  return (
    <div>
      <img className="image" src={props.image} alt={props.name} />
      <h3>{props.description}</h3>
      <p>{props.view}</p>
    </div>
  );
}

export default Card;
