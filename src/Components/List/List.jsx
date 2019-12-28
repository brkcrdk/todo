import React from "react";
import "./list.scss";
import ListItem from "../ListItem/ListItem";
import { openModal } from "../Modal/modalToggle";
const List = ({
  active,
  index,
  value,
  onChange,
  todos,
  removeTodo,
  moveUp,
  moveDown,
  section
}) => {
  const list = todos.filter((todo, index) => {
    if (section === "Aktif Görevler") {
      return todo.isDone === false;
    } else if (section === "Biten Görevler") {
      return todo.isDone === true;
    } else {
      return todo;
    }
  });
  const renderTodos =
    list &&
    list.map((todo, index) => (
      <ListItem
        key={index}
        content={todo.job}
        removeTodo={() => {
          removeTodo(index);
        }}
        moveUp={() => {
          moveUp(index);
        }}
        moveDown={() => {
          moveDown(index);
        }}
      />
    ));

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
      <div id="item-container">
        {list.length > 0 ? renderTodos : <p className="empty">Görev yok.</p>}
      </div>
    </div>
  );
};

export default List;
