import React from "react";

const Item = ({ value, change }) => {
  return (
    <form data-testid="item-container">
      <label>Add Todo</label>
      <input value={value} aria-label="todo-input" onChange={change} />
    </form>
  );
};

export default Item;
