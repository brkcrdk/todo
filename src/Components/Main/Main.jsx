import React, { useState } from "react";
import Item from "../TodoItem/Item";
const Main = () => {
  // const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div data-testid="main-container">
      <h3>Main page goes here {value}</h3>
      <Item value={value} change={handleChange} />
    </div>
  );
};

export default Main;
