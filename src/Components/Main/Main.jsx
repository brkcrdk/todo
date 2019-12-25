import React, { useState } from "react";
import List from "../List/List";
import Item from "../Item/Item";
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
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div data-testid="main-container">
      <h3>Main page goes here</h3>
      <Item value={value} onChange={handleChange} />
      <List />
    </div>
  );
};

export default Main;
