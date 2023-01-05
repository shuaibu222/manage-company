// Header DOM
const btnHamburger = document.querySelector(".hamburger-icon");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const menu = document.querySelector(".menu");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    menu.classList.add("non-visible");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("no-scroll");
    header.classList.add("open");
    menu.classList.remove("non-visible");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// slider DOM
const slider = document.querySelector(".testimonials");
const navs = document.querySelectorAll(".navs");
const cards = document.querySelectorAll(".card-parent");

slider.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    navs.forEach(function (n) {
      n.classList.remove("active");
    });

    e.target.classList.add("active");

    cards.forEach(function (i) {
      i.classList.add("none");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
    element.classList.remove("none");
  }
});
