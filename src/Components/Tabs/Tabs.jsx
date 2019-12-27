import React, { useState } from "react";
import "./tabs.scss";
import List from "../List/List";

const Tabs = ({ value }) => {
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

  return (
    <div id="tab-container">
      {renderTabs}

      <List active={active} index={0} />

      {/* <div className={`tab-content ${active === 1 ? "active" : ""}`}>
        <List />
      </div>
      <div className={`tab-content ${active === 2 ? "active" : ""}`}>
        <List />
      </div> */}
    </div>
  );
};

export default Tabs;
