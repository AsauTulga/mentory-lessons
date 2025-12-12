// Init Masonry
var grid = document.querySelector(".grid");

var msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  originLeft: false,
  originTop: false,
});

// Init GLightbox
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  zoomable: true,
});
