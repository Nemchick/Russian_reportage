var controller = new ScrollMagic.Controller();

var startpin = new ScrollMagic.Scene({
  triggerElement: ".container_text",
  duration: 10
})
.setPin(".container_text")
.addTo(controller);

var tl = new TimelineMax();
tl.add(
  TweenMax.to(".svg-container", 1, {scale: 10, transformOrigin: "50%, 50%", ease: Power2.easeInOut}).delay(1)
);
tl.add(
  TweenMax.to(".svg-container", 1, {opacity: 0, ease: Power2.easeInOut})
);

var scene = new ScrollMagic.Scene({
  triggerElement: ".container_text",
  duration: 550,
  offset: function() {
    return -window.innerHeight * 2;
  }
})
.setTween(tl)
.addTo(controller);

// Следование блока за экраном
scene.on("progress", function (e) {
  var progress = e.progress;
  var windowHeight = window.innerHeight;
  var containerTextHeight = document.querySelector(".container_text").offsetHeight;
  var offset = windowHeight - containerTextHeight;
  var translateY = offset * progress;
  document.querySelector(".container_text").style.transform = "translateY(" + translateY + "px)";
});







