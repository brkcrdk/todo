import React, { useState } from "react";
import "./main.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Tabs from "../Tabs/Tabs";
import Modal from "../Modal/Modal";
import { closeModal } from "../Modal/modalToggle";
const Main = () => {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [todoValue, setTodoValue] = useState("");
  // const swap = (array, idx1) => {
  //   const newArray = array.slice();
  //   newArray[idx1] = array[idx1 + 1];
  //   newArray[idx1 + 1] = array[idx1];
  //   return newArray;
  // };
  // const handleClick = (index) => {
  //   console.log(swap(arr, index));
  //   const newArry = swap(arr, index);
  //   setArr(newArry);
  // };
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
  return (
    <div id="main-container">
      <Sidebar />
      <div id="content-container">
        <Navbar />
        <Tabs value={searchValue} onChange={searchInput} todos={todos} />
        <Modal value={todoValue} onChange={todoInput} addTodo={addTodo} />
      </div>
    </div>
  );
};

export default Main;
