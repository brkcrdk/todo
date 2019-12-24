import React, { useState } from "react";
import Item from "../TodoItem/Item";
const Main = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  return (
    <div data-testid="main-container">
      <h3>Main page goes here</h3>
      <Item />
    </div>
  );
};

export default Main;
