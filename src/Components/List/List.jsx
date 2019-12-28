import React, { useState } from "react";
import "./list.scss";
import ListItem from "../ListItem/ListItem";
const List = ({ active, index, value, onChange }) => {
  const [modalToggle, setModalToggle] = useState(false);
  const handleModalToggle = () => {
    const modal = document.getElementById("modal-container");
    if (modalToggle && modal) {
      modal.style.display = "none";
      setModalToggle(false);
    } else {
      modal.style.display = "grid";
      setModalToggle(true);
    }
  };
  return (
    <div
      id="list-container"
      className={`tab-content ${active === index ? "active" : ""}`}>
      <div id="input-addBtn">
        <input value={value} onChange={onChange} placeholder="Arama.." />
        <button onClick={handleModalToggle}>
          <span>Yeni görev ekle</span>
          <i className="fas fa-plus" />
        </button>
      </div>
      <div id="item-container">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />

        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};

export default List;
