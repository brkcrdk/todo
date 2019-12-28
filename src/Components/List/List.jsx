import React from "react";
import "./list.scss";
import ListItem from "../ListItem/ListItem";
import { openModal } from "../Modal/modalToggle";
const List = ({ active, index, value, onChange, todos }) => {
  const renderTodos =
    todos &&
    todos.map((todo, index) => <ListItem key={index} content={todo.job} />);
  return (
    <div
      id="list-container"
      className={`tab-content ${active === index ? "active" : ""}`}>
      <div id="input-addBtn">
        <input value={value} onChange={onChange} placeholder="Arama.." />
        <button onClick={openModal}>
          <span>Yeni görev ekle</span>
          <i className="fas fa-plus" />
        </button>
      </div>
      <div id="item-container">{renderTodos}</div>
    </div>
  );
};

export default List;
