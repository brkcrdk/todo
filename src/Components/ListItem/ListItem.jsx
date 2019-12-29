import React from "react";
import "./listItem.scss";
const ListItem = ({
  job,
  removeTodo,
  moveUp,
  moveDown,
  isDone,
  handleIsDone,
  upDisable,
  downDisable
}) => {
  return (
    <div id="listItem-container">
      <label id="custom-checkbox">
        <input type="checkbox" checked={isDone} onChange={handleIsDone} />
        <span />
      </label>
      <p className={isDone ? "isDone" : ""}>{job}</p>
      <div id="listItem-buttons">
        <button disabled={upDisable} onClick={moveUp}>
          <i className="fas fa-chevron-up" />
        </button>
        <button onClick={removeTodo}>
          <i className="fas fa-trash" />
        </button>
        <button disabled={downDisable} onClick={moveDown}>
          <i className="fas fa-chevron-down" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
