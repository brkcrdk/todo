import React from "react";

const Tab = ({ onClick, label, icon }) => {
  return (
    <button onClick={onClick}>
      <i className={`fas fa-${icon}`} />
      <span>{label}</span>
    </button>
  );
};

export default Tab;
