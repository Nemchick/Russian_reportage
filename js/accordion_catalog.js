$(document).ready(function() {
    $('.box_btn_catalog_accordion').click(function() {
      var target = $(this).data('target');
      $(target).slideToggle();
      $(this).toggleClass('accordion-open');
    });
  });

  