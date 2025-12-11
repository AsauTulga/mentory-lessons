const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },
});
