import React, { useState } from "react";
import Input from "../Input/Input";
const Main = () => {
  const [todo, setTodo] = [];
  return (
    <div data-testid="main-container">
      <h3>Main page goes here</h3>
      <Input />
    </div>
  );
};

export default Main;
