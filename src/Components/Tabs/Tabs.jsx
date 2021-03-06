import React, { useState } from "react";
import "./tabs.scss";
import List from "../List/List";
import Tab from "./Tab";
import { todoCount } from "./todoCount";
const Tabs = ({ todos, removeTodo, moveUp, moveDown, handleIsDone }) => {
  const [active, setActive] = useState(0);
  const count = todoCount(todos);
  const handleTab = (index) => {
    if (active !== index) {
      setActive(index);
    }
  };
  const tabs = [
    { tab: "Tüm Görevler", icon: "sign-in-alt" },
    { tab: "Aktif Görevler", icon: "clock" },
    { tab: "Biten Görevler", icon: "check-circle" }
  ];

  const renderButtons = tabs.map((todo, index) => (
    <Tab
      key={index}
      label={todo.tab}
      icon={todo.icon}
      active={active}
      index={index}
      todos={todos}
      count={count}
      onClick={() => {
        handleTab(index);
      }}
    />
  ));
  const renderList = tabs.map((todo, index) => (
    <List
      section={todo.tab}
      key={index}
      active={active}
      index={index}
      todos={todos}
      removeTodo={removeTodo}
      moveUp={moveUp}
      moveDown={moveDown}
      handleIsDone={handleIsDone}
    />
  ));
  return (
    <div id="tab-container">
      <div id="buttons">{renderButtons}</div>
      {renderList}
    </div>
  );
};

export default Tabs;
