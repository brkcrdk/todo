import React, { useState } from "react";
import List from "../List/List";
import Item from "../Item/Item";
const Main = () => {
  const [todo, setTodo] = useState([{ job: "Gym" }, { job: "Run" }]);
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    if (value !== "") {
      setTodo([...todo, { job: value }]);
      setValue("");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value.trim());
  };
  return (
    <div data-testid="main-container">
      <h3>Main page goes here</h3>
      <Item value={value} onChange={handleChange} onClick={handleClick} />
      <List todos={todo} />
    </div>
  );
};

export default Main;
