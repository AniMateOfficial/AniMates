const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const trends = document.querySelectorAll(".trends");
// const explore_btn = document.getElementsByClassName("explore_btn");

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

let count = 0;

trends.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

setInterval(function () {
  count++;
  if (count == trends.length) {
    count = 0;
  }
  myFun();
}, 3500);

function myFun() {
  trends.forEach(function (curVal) {
    curVal.style.transform = `translateX(-${count * 100}%)`;
  });
}

// function explore_btn() {
//   window.open("pages/shop.html");
// }
