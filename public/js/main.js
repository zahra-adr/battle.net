import Header from "../module/header";
import navbar from "../module/navbar";
import slider from "../module/slider";
import product from "../module/product";
import footer from "../module/footer";
Header();
navbar();
slider();
product();
footer();

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".weSwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});