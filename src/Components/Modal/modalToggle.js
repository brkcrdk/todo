export const openModal = () => {
  const modal = document.getElementById("modal-container");
  modal.style.display = "grid";
};

export const closeModal = () => {
  const modal = document.getElementById("modal-container");
  modal.style.display = "none";
};
