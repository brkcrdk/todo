import React from "react";

const Tab = ({ onClick, label, icon, active, index, count }) => {
  const renderCount =
    label === "Aktif Görevler" ? <span id="active-count">{count}</span> : "";
  return (
    <button onClick={onClick} className={active === index ? "activeBtn" : ""}>
      <i className={`fas fa-${icon}`} />
      <span id="tab-label">{label}</span>
      {renderCount}
    </button>
  );
};

export default Tab;
