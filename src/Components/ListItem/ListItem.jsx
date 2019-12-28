import React from "react";
import "./listItem.scss";
const ListItem = () => {
  return (
    <div id="listItem-container">
      <input type="checkbox" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
        sapiente! Perferendis temporibus magnam unde dolor cum amet voluptatem,
        ad neque.
      </p>
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
