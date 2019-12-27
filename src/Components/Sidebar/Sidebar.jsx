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
        <li>
          <i className="fas fa-bars" />
          <span>Görevler</span>
        </li>
        <li>
          <i class="fas fa-cog" />
          <span>Ayarlar</span>
        </li>
      </div>
      <div id="bottom-section">
        <li>
          <i class="fas fa-power-off" />
          <span>Kapat</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
