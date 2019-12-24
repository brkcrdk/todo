import React from "react";

const Item = ({ value, change }) => {
  return (
    <form data-testid="item-container">
      <label>Add Todo</label>
      <input value={value} aria-label="todo-input" onChange={change} />
      <button data-testid="add-button">Add</button>
    </form>
  );
};

export default Item;
