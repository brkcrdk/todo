export const openModal = () => {
  const modal = document.getElementById("modal-container");
  const textarea = document.getElementById("modal-textarea");
  modal.style.display = "grid";
  textarea.focus();
};

export const closeModal = () => {
  const modal = document.getElementById("modal-container");
  modal.style.display = "none";
};
