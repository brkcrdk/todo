import React, { useState } from "react";
import "./tabs.scss";
import List from "../List/List";
import Button from "./Button";
const Tabs = ({ value, onChange }) => {
  const [active, setActive] = useState(0);
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
    <Button
      key={index}
      label={todo.tab}
      icon={todo.icon}
      onClick={() => {
        handleTab(index);
      }}
    />
  ));
  const renderList = tabs.map((todo, index) => (
    <List
      key={index}
      active={active}
      index={index}
      value={value}
      onChange={onChange}
    />
  ));
  return (
    <div id="tab-container">
      {renderButtons}
      {renderList}
    </div>
  );
};

export default Tabs;
