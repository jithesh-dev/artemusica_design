// Selector
const modal = document.getElementsByClassName("modal")[0];
const overlay = document.getElementById("overlay");
const modalButton = document.getElementById("btn-modal");
const modalCloseButton = document.getElementById("close-btn");

modalButton.addEventListener("click", function () {
  overlay.classList.add("is-visible");
  modal.classList.add("is-visible");
});

modalCloseButton.addEventListener("click", function () {
  overlay.classList.remove("is-visible");
  modal.classList.remove("is-visible");
});
document.getElementById("overlay").addEventListener("click", function () {
  overlay.classList.remove("is-visible");
  modal.classList.remove("is-visible");
});
