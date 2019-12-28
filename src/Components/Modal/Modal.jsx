import React from "react";
import "./modal.scss";
import { closeModal } from "./modalToggle";
const Modal = () => {
  return (
    <div id="modal-container">
      <div id="modal-content">
        <button onClick={closeModal} id="modal-closeBtn">
          &times;
        </button>
        <h5>Yeni Görev Ekle</h5>
        <textarea value="ssss" />
        <button>EKLE</button>
      </div>
    </div>
  );
};

export default Modal;
