import React from "react";

const Tab = ({ onClick, label, icon, active, index }) => {
  return (
    <button onClick={onClick} className={active === index ? "activeBtn" : ""}>
      <i className={`fas fa-${icon}`} />
      <span>{label}</span>
    </button>
  );
};

export default Tab;
