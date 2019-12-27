import React from "react";

const Icon = ({ icon, label }) => {
  return (
    <li>
      <i className={`fas fa-${icon}`} />
      <span>{label}</span>
    </li>
  );
};

export default Icon;
