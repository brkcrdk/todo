import React, { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    const sidebar = document.getElementById("sidebar-container");
    if (toggle) {
      sidebar.style.maxWidth = 0;
      setToggle(false);
    } else {
      sidebar.style.maxWidth = "6.5em";
      setToggle(true);
    }
  };
  return (
    <div id="navbar-container">
      <i className="fas fa-bars" onClick={handleToggle} />
      <div>
        <i className="fas fa-redo-alt" />
        <span>Görev Yönetim Paneli</span>
      </div>
    </div>
  );
};

export default Navbar;
