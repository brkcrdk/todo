import React, { useState } from "react";
import "./tabs.scss";
import List from "../List/List";
const Tabs = () => {
  const [active, setActive] = useState(0);
  const handleTab = (index) => {
    if (active !== index) {
      setActive(index);
    }
  };
  const renderTabs = ["Tüm Görevler", "Aktif Görevler", "Biten Görevler"].map(
    (todo, index) => (
      <button
        key={index}
        onClick={() => {
          handleTab(index);
        }}>
        {todo}
      </button>
    )
  );

  return (
    <div id="tab-container">
      {renderTabs}
      <div className={`tab-content ${active === 0 ? "active" : ""}`}>
        <List />
      </div>
      <div className={`tab-content ${active === 1 ? "active" : ""}`}>
        <List />
      </div>
      <div className={`tab-content ${active === 2 ? "active" : ""}`}>
        <List />
      </div>
    </div>
  );
};

export default Tabs;
