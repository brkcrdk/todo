import React from "react";

const List = ({ todos }) => {
  return (
    <ul data-testid="list-container">
      {todos &&
        todos.map((item, key) => (
          <li key={key} disabled={item.isDone}>
            {item.task}
          </li>
        ))}
    </ul>
  );
};

export default List;
