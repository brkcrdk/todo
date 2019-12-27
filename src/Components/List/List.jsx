import React from "react";
import "./list.scss";
const List = ({ active, index }) => {
  return (
    <div
      id="list-container"
      className={`tab-content ${active === index ? "active" : ""}`}>
      Content {index}
    </div>
  );
};

export default List;
