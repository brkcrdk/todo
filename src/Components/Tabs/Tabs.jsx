import React, { useState } from "react";
import "./tabs.scss";
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
        Tüm Görevler
      </div>
      <div className={`tab-content ${active === 1 ? "active" : ""}`}>
        Aktif Görevler
      </div>
      <div className={`tab-content ${active === 2 ? "active" : ""}`}>
        Biten Görevler
      </div>
    </div>
  );
};

export default Tabs;
