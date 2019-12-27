import React from "react";
import "./list.scss";
const List = ({ active, index }) => {
  return (
    <div id="list-container">
      <div className={`tab-content ${active === index ? "active" : ""}`}>
        Content
      </div>
    </div>
  );
};

export default List;
