fetch("header_black.html")
  .then((response) => response.text())
  .then((headerHtml) => {
    document.getElementById("header-placeholder").innerHTML = headerHtml;

    // Содержимое первого блока кода
    const burgerBtn = document.querySelector('.js-burger-btn');
    const burger = document.querySelector('.js-burger');
    const closeBurger = document.querySelector('.js_close_burger');
    const searchHeaderBtn = document.querySelector('.search_header_btn');
    const searchField = document.querySelector('.container_search_field');
    const searchBtnClose = document.querySelector('.search_btn_close');

    burgerBtn.addEventListener('click', function() {
      burger.classList.add('burger_open');
    });

    closeBurger.addEventListener('click', function() {
      burger.classList.remove('burger_open');
    });

    searchField.addEventListener('click', function(event) {
      event.stopPropagation(); // отменить всплытие события
    });

    searchHeaderBtn.addEventListener('click', function() {
      searchField.classList.add('burger_open');
    });

   

    searchBtnClose.addEventListener('click', function() {
      searchField.classList.remove('burger_open');
    });

  });