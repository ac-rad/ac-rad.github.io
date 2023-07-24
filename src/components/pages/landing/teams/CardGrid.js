import React from "react";

// must input an array of cards
const CardGrid = (props) => {
  return <div className="CardGrid mx-8">{props.cards}</div>;
};

export default CardGrid;
