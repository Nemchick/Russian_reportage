gsap.registerPlugin(ScrollTrigger);

// Получаем текущую ширину экрана
const screenWidth = window.innerWidth;

// Определяем значения top в зависимости от ширины экрана
let smallImgTop, bixImgTop;

if (screenWidth > 1399) {
  smallImgTop = "100%";
  bixImgTop = "40%";
} else if (screenWidth > 991) {
  smallImgTop = "82%";
  bixImgTop = "65%";
}else if (screenWidth > 575){
    smallImgTop = "100%";
  bixImgTop = "70%";
}else{
  smallImgTop = "78%";
  bixImgTop = "73%";
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