$(document).ready(function () {
  $(".box_scroll_category_catalog").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
     // Отключение возможности прокрутки слайдера с помощью мыши
    responsive: {
      0: {
        items: 1.5,
      },
      450: {
        items: 2.2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2.6,
      },
      992: {
        items: 3.2,
      },
      1200: {
        items: 3.9,
      },
      1400: {
        items: 4.4,
      }
    },
    smartSpeed: 500, // Задайте значение по вашему выбору
  });
});
