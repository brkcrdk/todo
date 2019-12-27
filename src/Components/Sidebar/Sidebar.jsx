import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div id="sidebar-container">
      <div id="top-section">
        <li>Avatar</li>
        <li>Ayarlar</li>
        <li>Görevler</li>
      </div>
      <div id="bottom-section">
        <li>Kapat</li>
      </div>
    </div>
  );
};

export default Sidebar;
