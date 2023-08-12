$(document).ready(function() {
    $('.burger_catalog_btn').click(function() {
      $('.block_burger_catalog').toggleClass('active');
    });
  
    $(document).mouseup(function(e) {
      var container = $('.block_burger_catalog');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('active');
      }
    });
  
    $('.img_popap_burger_catalog_close').click(function() {
      $('.block_burger_catalog').removeClass('active');
    });
  });