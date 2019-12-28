import React, { useState } from "react";
import "./list.scss";
import ListItem from "../ListItem/ListItem";
import { openModal } from "../Modal/modalToggle";
import { todoFilter } from "./todoFilter";
const List = ({
  active,
  index,
  todos,
  removeTodo,
  moveUp,
  moveDown,
  section,
  handleIsDone
}) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const list = todoFilter(todos, section, search);

  const renderTodos =
    list &&
    list.map((todo, index) => (
      <ListItem
        key={index}
        job={todo.job}
        isDone={todo.isDone}
        removeTodo={() => {
          removeTodo(todo.id);
        }}
        moveUp={() => {
          moveUp(index);
        }}
        moveDown={() => {
          moveDown(index);
        }}
        handleIsDone={() => {
          handleIsDone(todo.id);
        }}
      />
    ));

  return (
    <div
      id="list-container"
      className={`tab-content ${active === index ? "active" : ""}`}>
      <div id="input-addBtn">
        <input value={search} onChange={handleSearch} placeholder="Arama.." />
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
