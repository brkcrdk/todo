import React, { useState } from "react";
import "./main.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Tabs from "../Tabs/Tabs";
import Modal from "../Modal/Modal";
import { closeModal } from "../Modal/modalToggle";
import { generateKey } from "./generateKey";
import { alertOpen } from "./alertToggle";
import Alert from "./Alert";
const Main = () => {
  const [todos, setTodos] = useState([
    { job: "Spora git", isDone: false, id: generateKey("s") },
    { job: "Alışverişe git", isDone: false, id: generateKey("a") },
    { job: "Ödev yap", isDone: false, id: generateKey("ö") },
    { job: "Şu kitabı al", isDone: true, id: generateKey("ş") }
  ]);
  const [todoValue, setTodoValue] = useState("");

  const todoInput = (e) => {
    setTodoValue(e.target.value);
  };
  const addTodo = () => {
    if (todoValue !== "") {
      setTodos([
        ...todos,
        { job: todoValue, isDone: false, id: generateKey(todoValue[0]) }
      ]);
      setTodoValue("");
      closeModal();
    } else {
      alertOpen();
    }
  };

  const removeTodo = (id) => {
    const newArray = todos.filter((todo, i) => {
      return todo.id !== id;
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
    if (index <= todos.length - 1) {
      const newArray = todos.slice();
      newArray[index] = todos[index + 1];
      newArray[index + 1] = todos[index];
      setTodos(newArray);
    }
  };
  const handleIsDone = (id) => {
    const newArray = todos.map((obj, idx) =>
      obj.id === id ? { ...obj, isDone: true } : obj
    );
    setTodos(newArray);
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
