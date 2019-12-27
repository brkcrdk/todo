import React, { useState, useCallback } from "react";

const Main = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
  const swap = (array, idx1) => {
    let temp = array[idx1];
    array[idx1] = array[idx1 + 1];
    array[idx1 + 1] = temp;
    return array;
  };

  return (
    <div data-testid="main-container">
      <h3>Main page goes here</h3>
      {arr.map((item, i) => (
        <button key={i}>{item}</button>
      ))}
    </div>
  );
};

export default Main;
