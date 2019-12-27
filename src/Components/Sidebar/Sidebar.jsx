import React from "react";
import "./sidebar.scss";
import avatar from "./avatar.png";
const Sidebar = () => {
  return (
    <div id="sidebar-container" className="close">
      <div id="top-section">
        <li>
          <img src={avatar} alt="avatar-img" />
        </li>
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
