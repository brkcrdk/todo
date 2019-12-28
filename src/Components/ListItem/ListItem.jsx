import React from "react";
import "./listItem.scss";
const ListItem = ({ content }) => {
  return (
    <div id="listItem-container">
      <label id="custom-checkbox">
        <input type="checkbox" />
        <span />
      </label>
      <p>{content}</p>
      <div id="listItem-buttons">
        <button>
          <i className="fas fa-chevron-up" />
        </button>
        <button>
          <i className="fas fa-trash" />
        </button>
        <button>
          <i className="fas fa-chevron-down" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
