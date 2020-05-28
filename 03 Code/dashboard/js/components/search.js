// Selectors
const searchBtn = document.getElementsByClassName("search-container")[0];
const searchInpWrapper = searchBtn.querySelector(".inp-wrapper");
const searchInp = searchInpWrapper.querySelector("input");

searchBtn.addEventListener("click", addFull);

function addFull() {
  event.stopPropagation();
  searchInpWrapper.classList.add("full");
  searchInp.focus();
  document.addEventListener("click", removeFull);
}

function removeFull() {
  if (searchBtn !== event.target && !searchBtn.contains(event.target)) {
    searchInpWrapper.classList.remove("full");
    document.removeEventListener("click", removeFull);
  }
}
