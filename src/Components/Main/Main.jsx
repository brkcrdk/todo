import React, { useState } from "react";
import Item from "../TodoItem/Item";
import List from "../TodoList/List";

const Main = () => {
  const [todo, setTodo] = useState([{ task: "Go to gym", isDone: true }]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div data-testid="main-container">
      <h3>Main page goes here {value}</h3>
      <Item value={value} change={handleChange} />
      <List todos={todo} />
    </div>
  );
};

export default Main;
