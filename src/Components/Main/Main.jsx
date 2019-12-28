import React, { useState } from "react";
import "./main.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Tabs from "../Tabs/Tabs";
import Modal from "../Modal/Modal";
import { closeModal } from "../Modal/modalToggle";
const Main = () => {
  const [todos, setTodos] = useState([
    { job: "Burak", isDone: false },
    { job: "Murat", isDone: false },
    { job: "Aykut", isDone: false },
    { job: "Furkan", isDone: true }
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [todoValue, setTodoValue] = useState("");
  const searchInput = (e) => {
    setSearchValue(e.target.value);
  };
  const todoInput = (e) => {
    setTodoValue(e.target.value);
  };
  const addTodo = () => {
    setTodos([...todos, { job: todoValue, isDone: false }]);
    setTodoValue("");
    closeModal();
  };
  const removeTodo = (index) => {
    const newArray = todos.filter((todo, i) => {
      return index !== i;
    });
    setTodos(newArray);
  };
  const moveUp = (index) => {
    if (index > 0) {
      const newArray = todos.slice();
      newArray[index] = todos[index - 1];
      newArray[index - 1] = todos[index];
      setTodos(newArray);
    }
  };
  const moveDown = (index) => {
    if (index < todos.length + 1) {
      const newArray = todos.slice();
      newArray[index] = todos[index + 1];
      newArray[index + 1] = todos[index];
      setTodos(newArray);
    }
  };
  const handleIsDone = (index) => {
    const newObj = { job: todos[index].job, isDone: true };
    const newArray = [
      ...todos.slice(0, index),
      newObj,
      ...todos.slice(index + 1)
    ];
    return setTodos(newArray);
  };
  return (
    <div id="main-container">
      <Sidebar />
      <div id="content-container">
        <Navbar />
        <Tabs
          value={searchValue}
          onChange={searchInput}
          todos={todos}
          removeTodo={removeTodo}
          moveUp={moveUp}
          moveDown={moveDown}
          handleIsDone={handleIsDone}
        />
        <Modal value={todoValue} onChange={todoInput} addTodo={addTodo} />
      </div>
    </div>
  );
};

export default Main;
