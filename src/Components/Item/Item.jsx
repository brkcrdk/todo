import React from "react";

const Item = ({ value, onChange }) => {
  return (
    <div data-testid="item-container">
      <input data-testid="todo-input" value={value} onChange={onChange} />
      <button>Add Todo</button>
    </div>
  );
};

export default Item;
