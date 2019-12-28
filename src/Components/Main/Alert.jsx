import React from "react";
import { alertClose } from "./alertToggle";
const Alert = () => {
  return (
    <div id="alert-container">
      <button onClick={alertClose}>&times;</button>
      <p>Görev boş bırakılamaz.</p>
    </div>
  );
};

export default Alert;
