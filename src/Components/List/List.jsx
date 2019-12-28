import React from "react";
import "./list.scss";
const List = ({ active, index, value, onChange }) => {
  return (
    <div
      id="list-container"
      className={`tab-content ${active === index ? "active" : ""}`}>
      <div id="input-addBtn">
        <input value={value} onChange={onChange} placeholder="Arama.." />
        <button>
          <span>Yeni görev ekle</span>
          <i className="fas fa-plus" />
        </button>
      </div>
    </div>
  );
};

export default List;
