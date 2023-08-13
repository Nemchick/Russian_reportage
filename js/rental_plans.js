window.addEventListener('scroll', function() {
    const animationInfoFilm = document.querySelector('.container_Rental_plans');
    const animationSquareInfoFilm = document.querySelector('.animation_Rental_plans');
    const animationInfoFilmTop = animationInfoFilm.offsetTop;
    const windowScroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    const isAnimationInfoVisible = animationInfoFilmTop < (windowScroll + windowHeight);

    if (isAnimationInfoVisible) {
      animationInfoFilm.classList.add('show');
    } else {
      animationInfoFilm.classList.remove('show');
      animationSquareInfoFilm.style.transitionDuration = '2s';
      animationSquareInfoFilm.style.transitionDelay = '0s';
    }
  });