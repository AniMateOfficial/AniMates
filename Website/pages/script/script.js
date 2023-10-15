const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const cardtshirts = document.querySelector(".cardtshirts");
const cardmerchs = document.querySelector(".cardmerchs");
const heading = document.getElementById("heading");
const card = document.getElementsByClassName("card");
const crd = document.getElementsByClassName("crd");
// const review = document.getElementById("reviews");
// const blog = document.getElementById("blogs");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "rgb(209, 203, 203)";
    body.style.color = "#272626";
    body.style.transition = "2s";
    toggle.style.color = rgb(226, 94, 94);
    card.style.background = rgb(226, 94, 94);
  } else {
    body.style.background = "rgb(27, 26, 26)";
    body.style.color = "#fae2e2";
    body.style.transition = "2s";
    toggle.style.color = "#fae2e2";
    card.style.background = rgb(226, 94, 94);
    crd.style.backgrounnd = rgb(226, 94, 94);
  }
});

function shop() {
  cardtshirts.style.display = "block";
  cardmerchs.style.display = "block";
  // mainPage.style.display = "none";
  // blogContent.style.display = "none";
  // aboutPage.style.display = "none";
  // contactus.style.display = "none";

  // document.getElementById("blog").style.color = "black";
  // document.getElementById("about").style.color = "black";
  // document.getElementById("shop").style.color = "rgb(1, 190, 190)";
  // document.getElementById("home").style.color = "black";
  // document.getElementById("contact").style.color = "black";
}
function showCard(img) {
  let newImg = document.getElementById("cartImg");
  newImg.src = img.src;
  document.querySelector(".fullPage").style.display = "flex";
  cardtshirts.style.display = "none";
  cardmerchs.style.display = "none";
  heading.innerText = "CART";
  // mainPage.style.display = "none";
  // blogContent.style.display = "none";
}

// Add to Cart

function addItem() {
  document.querySelector(".addCart").style.display = "block";
  cardtshirts.style.display = "none";
  cardmerchs.style.display = "none";
  // mainPage.style.display = "none";
  // blogContent.style.display = "none";
}

function addToCart() {
  alert("Added To Cart");
  location.reload();
}
