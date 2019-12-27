import React from "react";
import "./list.scss";
const List = ({ active, index, value, onChange }) => {
  return (
    <div
      id="list-container"
      className={`tab-content ${active === index ? "active" : ""}`}>
      <div>
        <input value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default List;
