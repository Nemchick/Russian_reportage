$(document).ready(function(){
  $(".box_carousel_film_info").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    startPosition: 1,
    responsive: {
      0: {
        items: 1.15,
      },
      576: {
        items: 2,
      },
      1400: {
        items: 2.4,
      }
    }
  });
});