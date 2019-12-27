import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
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
    <div>
      <Sidebar />
    </div>
  );
};

export default Main;
