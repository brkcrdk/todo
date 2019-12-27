import React, { useState } from "react";
import "./main.scss";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
  const [toggle, setToggle] = useState(false);
  const swap = (array, idx1) => {
    const newArray = array.slice();
    newArray[idx1] = array[idx1 + 1];
    newArray[idx1 + 1] = array[idx1];
    return newArray;
  };
  const handleClick = (index) => {
    console.log(swap(arr, index));
    const newArry = swap(arr, index);
    setArr(newArry);
  };
  const handleToggle = () => {
    const sidebar = document.getElementById("sidebar-container");
    if (toggle) {
      sidebar.style.maxWidth = 0;
      setToggle(false);
    } else {
      sidebar.style.maxWidth = "7em";
      setToggle(true);
    }
  };
  return (
    <div id="main-container">
      <Sidebar />
      <span onClick={handleToggle}>X</span>
    </div>
  );
};

export default Main;
