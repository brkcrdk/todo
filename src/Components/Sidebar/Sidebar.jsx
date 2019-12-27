import React from "react";
import "./sidebar.scss";
import avatar from "./avatar.png";
import Icon from "./Icon";
const Sidebar = () => {
  return (
    <div id="sidebar-container" className="close">
      <div id="top-section">
        <li>
          <img src={avatar} alt="avatar-img" />
        </li>
        <Icon label="Görevler" icon="bars" />
        <Icon label="Ayarlar" icon="cog" />
        <Icon label="Kapat" icon="power-off" />
      </div>
    </div>
  );
};

export default Sidebar;
