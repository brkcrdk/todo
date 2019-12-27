import React, { useState } from "react";
import "./main.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Tabs from "../Tabs/Tabs";
const Main = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
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

  return (
    <div id="main-container">
      <Sidebar />
      <div id="content-container">
        <Navbar />
        <Tabs />
      </div>
    </div>
  );
};

export default Main;
