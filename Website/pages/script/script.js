const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "rgb(209, 203, 203)";
    body.style.color = "#272626";
    body.style.transition = "2s";
    toggle.style.color = "#969696";
  } else {
    body.style.background = "rgb(27, 26, 26)";
    body.style.color = "#fae2e2";
    body.style.transition = "2s";
    toggle.style.color = "#fae2e2";
  }
});
