gsap.registerPlugin(ScrollTrigger);

// Получаем текущую ширину экрана
const screenWidth = window.innerWidth;

// Определяем значения top в зависимости от ширины экрана
let smallImgTop, bixImgTop;

if (screenWidth > 1295) {
  smallImgTop = "56%";
  bixImgTop = "36%";
} else if (screenWidth > 959) {
  smallImgTop = "70%";
  bixImgTop = "60%";
}else{
    smallImgTop = "59%";
  bixImgTop = "62%";
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