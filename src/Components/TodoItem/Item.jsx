import React from "react";

const Item = ({ value }) => {
  return (
    <form data-testid="item-container">
      <label>Add Todo</label>
      <input value={value} />
    </form>
  );
};

export default Item;
