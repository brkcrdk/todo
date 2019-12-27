import React from "react";

const Tabs = () => {
  return (
    <div id="tab-container">
      <button className="tab-link">Tüm Görevler</button>
      <button className="tab-link">Aktif Görevler</button>
      <button className="tab-link">Biten Görevler</button>
    </div>
  );
};

export default Tabs;
