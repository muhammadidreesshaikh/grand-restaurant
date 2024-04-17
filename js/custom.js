// nav-bar
function toggleMenu(x) {
  // icon animation
  x.classList.toggle("change");

  // menu open and close
  document.querySelector(".sidenav").classList.toggle("active");
}

// owl-carousel-testimonail
$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2020,
    smartSpeed: 2000,
    animateIn: 'linear',
    animateOut: 'linear',
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      425: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
});