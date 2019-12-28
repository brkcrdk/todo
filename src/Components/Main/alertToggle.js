export const alertOpen = () => {
  const alert = document.getElementById("alert-container");
  alert.style.transform = "translateX(0)";
};
export const alertClose = () => {
  const alert = document.getElementById("alert-container");
  alert.style.transform = "translateX(150%)";
};
