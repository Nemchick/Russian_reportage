$(document).ready(function () {
    $(".box_scroll_category_catalog").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1.25,
        },
        450: {
            items: 1.85,
          },
        576: {
            items: 1.8,
          },
        768: {
            items: 2.4,
          },
        992: {
            items: 3,
          },
        1200: {
          items: 3.6,
        },
        1400: {
          items: 4.2,
        }
      },
    });
  });
