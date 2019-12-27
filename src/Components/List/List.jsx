import React from "react";
import "./list.scss";
const List = ({ active, index, value, onChange }) => {
  return (
    <div
      id="list-container"
      className={`tab-content ${active === index ? "active" : ""}`}>
      <div id="input-addBtn">
        <input value={value} onChange={onChange} placeholder="Arama.." />
        <button>Yeni görev ekle</button>
      </div>
    </div>
  );
};

export default List;
