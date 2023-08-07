$(document).ready(function(){
    $(".box_carousel_film_info").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        }
      }
    });
  });