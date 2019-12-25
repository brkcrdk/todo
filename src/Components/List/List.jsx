import React from "react";

const List = ({ todos }) => {
  return (
    <ul data-testid="list-container">
      {todos && todos.map((item, key) => <li key={key}>{item.job}</li>)}
    </ul>
  );
};

export default List;
