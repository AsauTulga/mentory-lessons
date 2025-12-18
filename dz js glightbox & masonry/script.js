// Init Masonry
document.addEventListener("DOMContentLoaded", function () {
  var grid = document.querySelector(".grid");

  var msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    gutter: 10,
    percentPosition: true,
  });

  // Init GLightbox
  const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    plyr: {
      css: "https://cdn.plyr.io/3.6.12/plyr.css",
      js: "https://cdn.plyr.io/3.6.12/plyr.js",
      config: {
        ratio: "16:9",
        fullscreen: {
          enabled: true,
          iosNative: true,
        },
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
        },
        vimeo: {
          byline: false,
          portrait: false,
          title: false,
          transparent: false,
        },
      },
    },
  });

  var images = document.querySelectorAll(".grid-item img");
  var loadedImages = 0;

  images.forEach(function (img) {
    if (img.complete) {
      loadedImages++;
    } else {
      img.addEventListener("load", function () {
        loadedImages++;
        if (loadedImages === images.length) {
          msnry.layout();
        }
      });
    }
  });

  if (loadedImages === images.length) {
    msnry.layout();
  }
});
