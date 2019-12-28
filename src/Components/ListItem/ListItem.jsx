import React from "react";
import "./listItem.scss";
const ListItem = ({ job, removeTodo, moveUp, moveDown, isDone }) => {
  return (
    <div id="listItem-container">
      <label id="custom-checkbox">
        <input type="checkbox" checked={isDone} />
        <span />
      </label>
      <p className={isDone ? "isDone" : ""}>{job}</p>
      <div id="listItem-buttons">
        <button>
          <i className="fas fa-chevron-up" onClick={moveUp} />
        </button>
        <button>
          <i className="fas fa-trash" onClick={removeTodo} />
        </button>
        <button>
          <i className="fas fa-chevron-down" onClick={moveDown} />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
