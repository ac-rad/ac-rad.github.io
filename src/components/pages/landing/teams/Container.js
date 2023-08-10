import React from "react";

const Container = ({ cards, title, cardInfo }) => {
  return (
    <div>
      <h1 className="text-3xl teamPageCategoryTitle">{title}</h1>

      <div className="teamPageCardContainer">{cards}</div>
    </div>
  );
};

export default Container;
