// Selectors
const toggleBtn = document.getElementById("sb-toggle-btn");
let logos = document.getElementsByClassName("logo");
let menuText = document.getElementsByClassName("menu-text");
const sidebar = document.getElementsByClassName("sidebar")[0];
const main = document.getElementById("main");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed-sidebar");

  logos = Array.from(logos);
  logos.forEach((logo) => logo.classList.toggle("hide"));
  main.classList.toggle("collapsed-main");

  for (let item of menuText) {
    item.classList.toggle("hide");
    item.parentElement.classList.toggle("text-center");
  }

  document.querySelector("#sb-toggle-btn svg").classList.toggle("turn");
});
