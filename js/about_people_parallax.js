gsap.registerPlugin(ScrollTrigger);

// Получаем текущую ширину экрана
const screenWidth = window.innerWidth;

// Определяем значения top в зависимости от ширины экрана
let smallImgTop, bixImgTop;

if (screenWidth > 1400) {
  smallImgTop = "80%";
  bixImgTop = "40%";
} else if (screenWidth > 1200) {
  smallImgTop = "80%";
  bixImgTop = "40%";
}else if (screenWidth > 992) {
  smallImgTop = "100%";
  bixImgTop = "55%";
}else if (screenWidth > 768) {
  smallImgTop = "120%";
  bixImgTop = "70%";
}
else if (screenWidth > 390) {
  smallImgTop = "90%";
  bixImgTop = "60%";
}else{
  smallImgTop = "95%";
  bixImgTop = "65%";
}


// Используем полученные значения top при анимации
gsap.to(".small_img_parallax", {
  scrollTrigger: {
    trigger: ".section_about_parallax",
    start: "top top",
    end: "bottom center",
    scrub: true
  },
  top: smallImgTop,
  ease: "power2.out"
});

gsap.to(".bix_img_about_people_parallax", {
  scrollTrigger: {
    trigger: ".section_about_parallax",
    start: "top top",
    end: "bottom center",
    scrub: true
  },
  top: bixImgTop,
  ease: "power2.out"
});