// console.log(" 1 2 3 ");

const hamburger = document.querySelector(".hamburger");
const navMeni = document.querySelector(".list");
const header = document.querySelector("header");
const contactWrapper = document.querySelector(".contact-wrapper");
const frontPage = document.querySelector(".front-page");

let body = document.querySelector("body");
let logo = document.getElementById("logo");
console.log(logo);

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("active");
    if (
      header.classList.contains("active") &&
      header.classList.contains("front-page-header")
    ) {
      document.getElementById("logo").src = "assets/img/logo-dark.png";
    }
  } else {
    header.classList.remove("active");
    if (!header.classList.contains("front-page-header")) {
      document.getElementById("logo").src = "assets/img/logo-dark.png";
    } else {
      document.getElementById("logo").src = "assets/img/logo.png";
    }
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMeni.classList.toggle("active");
});
