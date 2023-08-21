const imageBlockSection = document.querySelector(".image-block");

if (imageBlockSection !== null) {
  let controller = new ScrollMagic.Controller();

  const topBarEl = imageBlockSection.querySelector(".bar-top");
  const rightBarEl = imageBlockSection.querySelector(".bar-right");
  const bottomBarEl = imageBlockSection.querySelector(".bar-bottom");
  const leftBarEl = imageBlockSection.querySelector(".bar-left");
  const innerEl = imageBlockSection.querySelector(".inner-content-wrap");
  const imageEl = imageBlockSection.querySelector(".expand-image");
  const animationPeopleLogoEl = imageBlockSection.querySelector(".animaton_people_logo");
  const barsEl = imageBlockSection.querySelector(".bars");

  innerEl.style.opacity = 1;
  innerEl.style.transform = "translateY(0%)";

  let scene = new ScrollMagic.Scene({
    triggerElement: imageBlockSection,
    triggerHook: "onLeave",
    duration: 1000,
  })
    .setPin(imageBlockSection)
    .addTo(controller);

  scene.on("progress", (event) => {
    let pixelProgress = event.progress * 700;

    if (pixelProgress <= 700) {
      let barScale = 1 - pixelProgress / 700;
      topBarEl.style.transform = "scaleY(" + barScale + ")";
      rightBarEl.style.transform = "scaleX(" + barScale + ")";
      bottomBarEl.style.transform = "scaleY(" + barScale + ")";
      leftBarEl.style.transform = "scaleX(" + barScale + ")";
    } else {
      topBarEl.style.transform = "scaleY(0)";
      rightBarEl.style.transform = "scaleX(0)";
      bottomBarEl.style.transform = "scaleY(0)";
      leftBarEl.style.transform = "scaleX(0)";
    }

    if (pixelProgress >= 400) {
      let imageScale = 1 + (pixelProgress - 400) / 100;
      imageEl.style.transform = "scale(" + imageScale + ")";
      innerEl.style.transform = "translateY(0%)";
    }
    if (pixelProgress >= 600) {
      let opacity = 0 - (pixelProgress - 600) / 100;
      imageEl.style.opacity = opacity;
    
      if (opacity <= 0) {
        imageEl.style.visibility = "hidden";
        animationPeopleLogoEl.style.visibility = "hidden";
        barsEl.style.visibility = "hidden";
      } else {
        imageEl.style.visibility = "visible";
        animationPeopleLogoEl.style.visibility = "visible";
        barsEl.style.visibility = "visible";
      }
    } else {
      imageEl.style.opacity = 1;
      imageEl.style.visibility = "visible";
    }
  });

  // Добавляем класс с плавными переходами
  imageBlockSection.classList.add("smooth-transition");
}
