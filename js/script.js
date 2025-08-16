const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});

let hamburger = document.querySelector(".hamburger");
let hamburger_icon = document.querySelector("#hamburger-icon");
let x_icon = document.querySelector("#x-icon");
let mobile_header = document.querySelector(".mobile-header");
let count = 0;

hamburger.addEventListener("click", function () {
  if (count === 0) {
    mobile_header.style.display = "block";
    hamburger_icon.style.display = "none";
    x_icon.style.display = "block";
    count = 1;
  } else {
    mobile_header.style.display = "none";
    hamburger_icon.style.display = "block";
    x_icon.style.display = "none";
    count = 0;
  }
});
