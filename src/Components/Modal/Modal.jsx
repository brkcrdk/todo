import React from "react";
import "./modal.scss";
const Modal = () => {
  return (
    <div id="modal-container">
      <div id="modal-content">
        <button>&times;</button>
        <h5>Yeni Görev Ekle</h5>
        <textarea>Text area values</textarea>
        <button>Ekle</button>
      </div>
    </div>
  );
};

export default Modal;
