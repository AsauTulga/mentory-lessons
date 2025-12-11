// Init Masonry
var grid = document.querySelector(".grid");

var msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  gutter: 15,
});

// Init GLightbox
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  zoomable: true,
});
