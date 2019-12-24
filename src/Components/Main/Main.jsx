import React, { useState } from "react";
import Item from "../TodoItem/Item";
import List from "../TodoList/List";

const Main = () => {
  const [todo, setTodo] = useState([{ task: "Go to gym", isDone: true }]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (value !== "") {
      e.preventDefault();
      setTodo([...todo, { task: value, isDone: false }]);
      setValue("");
    }
  };
  console.log(todo);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div data-testid="main-container">
      <h3>Main page goes here</h3>
      <Item value={value} change={handleChange} />
      <List todos={todo} submit={handleSubmit} />
    </div>
  );
};

export default Main;
