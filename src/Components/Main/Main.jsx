import React, { useState } from "react";
import "./main.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Tabs from "../Tabs/Tabs";
import Modal from "../Modal/Modal";
import Alert from "./Alert";
import {
  remove,
  add,
  up,
  down,
  done,
  input,
  fetchLocal
} from "./mainFunctions";

const Main = () => {
  const [todos, setTodos] = useState([...fetchLocal()]);
  const [todoValue, setTodoValue] = useState("");

  const todoInput = (e) => {
    input(e, setTodoValue);
  };
  const addTodo = () => {
    add(todoValue, setTodos, todos, setTodoValue);
  };
  const removeTodo = (id) => {
    remove(id, todos, setTodos);
  };
  const moveUp = (index) => {
    up(index, todos, setTodos);
  };
  const moveDown = (index) => {
    down(index, todos, setTodos);
  };
  const handleIsDone = (id) => {
    done(id, todos, setTodos);
  };

  return (
    <div id="main-container">
      <Sidebar />
      <div id="content-container">
        <Navbar />
        <Tabs
          todos={todos}
          removeTodo={removeTodo}
          moveUp={moveUp}
          moveDown={moveDown}
          handleIsDone={handleIsDone}
        />
        <Modal value={todoValue} onChange={todoInput} addTodo={addTodo} />
        <Alert />
      </div>
    </div>
  );
};

export default Main;
