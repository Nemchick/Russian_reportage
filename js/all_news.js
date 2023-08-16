window.addEventListener('scroll', function() {
    const sectionNews = document.querySelector('.container_all_news');
    const newsAnimationSquare = document.querySelector('.all_news_animation_square');
    const sectionTop = sectionNews.offsetTop; // Верхняя позиция блока section_news относительно верха страницы
    const windowScroll = window.pageYOffset || document.documentElement.scrollTop; // Прокрутка окна
    const windowHeight = window.innerHeight; // Высота окна браузера
    
    // Вычисляем, находится ли блок section_news на экране
    const isSectionVisible = sectionTop < (windowScroll + windowHeight);
    
    if (isSectionVisible) {
      sectionNews.classList.add('show'); // Добавить класс, когда блок section_news находится на экране
    } else {
      sectionNews.classList.remove('show');
      newsAnimationSquare.style.transitionDuration = '2s'; // Вернуть стандартную скорость анимации
      newsAnimationSquare.style.transitionDelay = '0s'; // Уберите задержку перед началом анимации
    }
  });