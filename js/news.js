window.addEventListener('scroll', function() {
  const sectionNews = document.querySelector('.section_news');
  const newsAnimationSquare = document.querySelector('.news_animation_square');
  const bigNewsWhiteHover = document.querySelector('.big_news_fff_hover');
  const smallNewsRedHover = document.querySelector('.small_news_red_hover');
  const bigNewsRedHover = document.querySelector('.big_news_red_hover');
  const smallNewsWhiteHover = document.querySelector('.small_news_fff_hover');
  const smallNewsWhiteHoverV2 = document.querySelector('.small_news_fff_hover_v2');
  const sectionTop = sectionNews.offsetTop; // Верхняя позиция блока section_news относительно верха страницы
  const windowScroll = window.pageYOffset || document.documentElement.scrollTop; // Прокрутка окна
  const windowHeight = window.innerHeight; // Высота окна браузера
  
  // Вычисляем, находится ли блок section_news на экране
  const isSectionVisible = sectionTop < (windowScroll + windowHeight);
  
  if (isSectionVisible) {
    sectionNews.classList.add('show'); // Добавить класс, когда блок section_news находится на экране
    setTimeout(function() {
      bigNewsWhiteHover.classList.add('visibility_visible');
      smallNewsRedHover.classList.add('visibility_visible');
      bigNewsRedHover.classList.add('visibility_visible');
      smallNewsWhiteHover.classList.add('visibility_visible');
      smallNewsWhiteHoverV2.classList.add('visibility_visible');
    }, 2000);
  } 
  // else {
  //   sectionNews.classList.remove('show');
  //   newsAnimationSquare.style.transitionDuration = '2s'; // Вернуть стандартную скорость анимации
  //   newsAnimationSquare.style.transitionDelay = '0s'; // Уберите задержку перед началом анимации
    
    
  // }
});