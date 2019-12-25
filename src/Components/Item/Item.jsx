import React from "react";

const Item = ({ value, onChange, onClick }) => {
  return (
    <div data-testid="item-container">
      <input data-testid="todo-input" value={value} onChange={onChange} />
      <button onClick={onClick}>Add Todo</button>
    </div>
  );
};

export default Item;
