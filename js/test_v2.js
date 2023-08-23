function parallax() {
    var parallaxController = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
      }
    });
  
    $('.parallax').each(function() {
      var trig = this.parentNode,
        parallax = this.getAttribute('data-parallax'),
        speed = -parallax * 10 + '%';
  
      new ScrollMagic.Scene({ triggerElement: trig })
        .setTween(this, { y: speed, ease: Linear.easeNone })
        .addTo(parallaxController);
    });
  }
  
  parallax();