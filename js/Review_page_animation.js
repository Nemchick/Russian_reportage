window.addEventListener('scroll', function() {
    const animationInfoFilm = document.querySelector('.container_Review_page');
    const animationSquareInfoFilm = document.querySelector('.animation_Review_page');
    const animationInfoFilmTop = animationInfoFilm.offsetTop;
    const windowScroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    const isAnimationInfoVisible = animationInfoFilmTop < (windowScroll + windowHeight);

    if (isAnimationInfoVisible) {
      animationInfoFilm.classList.add('show');
    } else {
      animationInfoFilm.classList.remove('show');
      animationSquareInfoFilm.style.transitionDuration = '2s';
      animationSquareInfoFilm.style.transitionDelay = '2s';
    }
  });