import React, { useState } from "react";
import "./tabs.scss";
import List from "../List/List";

const Tabs = ({ value, onChange }) => {
  const [active, setActive] = useState(0);
  const handleTab = (index) => {
    if (active !== index) {
      setActive(index);
    }
  };
  const tabs = ["Tüm Görevler", "Aktif Görevler", "Biten Görevler"];
  const renderTabs = tabs.map((todo, index) => (
    <button
      key={index}
      onClick={() => {
        handleTab(index);
      }}>
      <span>{todo}</span>
    </button>
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
      {renderTabs}
      {renderList}
    </div>
  );
};

export default Tabs;
