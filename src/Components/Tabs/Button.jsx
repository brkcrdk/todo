import React from "react";

const Button = ({ onClick, label, icon }) => {
  return (
    <button onClick={onClick}>
      <i className={`fas fa-${icon}`} />
      <span>{label}</span>
    </button>
  );
};

export default Button;
