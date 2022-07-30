let menuBar = document.querySelector(".nav");
let overlay = document.querySelector(".overlay");
let toggleButton = document.querySelector(".toggle-button");

// On Click The Menu Bar
toggleButton.addEventListener("click", () => {
  menuBar.classList.add("active");
  overlay.classList.add("active");
});

let closeButton = document.querySelector(".close-button");

// On Click The Close Menu Bar
closeButton.addEventListener("click", () => {
  menuBar.classList.remove("active");
  overlay.classList.remove("active");
});

// Overlay Onclick
overlay.addEventListener("click", () => {
  menuBar.classList.remove("active");
  overlay.classList.remove("active");
});

let dropMenu = document.querySelectorAll(".drop-menu");

// On Click The Drop Down Menu
dropMenu.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.currentTarget.querySelector("ul").classList.toggle("active");
  });
});

// Check If Click The Drop Down Menu
document.addEventListener("click", (e) => {
  e.target.classList.contains("drop-menu") ||
  e.target.parentElement.classList.contains("drop-menu")
    ? true
    : document
        .querySelectorAll(".drop-menu ul")
        .forEach((e) => e.classList.remove("active"));
});

let sliderImage = document.querySelector(".slider .image-box img");

// Change The Image Slider If Window Reach 767 Size
setInterval(() => {
  if (window.innerWidth <= 767) {
    sliderImage.src = "images/image-hero-mobile.png";
  } else {
    sliderImage.src = "images/image-hero-desktop.png";
  }
}, 0);
