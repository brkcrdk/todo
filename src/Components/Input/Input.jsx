import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState();
  return (
    <div data-testid="input-container">
      <label>Add todo: </label>
      <input aria-label="todo-input" placeholder="Add from here.." />
    </div>
  );
};

export default Input;
