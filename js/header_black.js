fetch("header_black.html")
  .then((response) => response.text())
  .then((headerHtml) => {
    document.getElementById("header-placeholder").innerHTML = headerHtml;

    // Содержимое первого блока кода
    const burgerBtn = document.querySelector('.js-burger-btn');
    const burger = document.querySelector('.js-burger');
    const closeBurger = document.querySelector('.js_close_burger');

    burgerBtn.addEventListener('click', function() {
      burger.classList.add('burger_open');
    });

    closeBurger.addEventListener('click', function() {
      burger.classList.remove('burger_open');
    });

    
  });