gsap.registerPlugin(ScrollTrigger);

gsap.to(".small_img_parallax", {
  scrollTrigger: {
    trigger: ".section_about_parallax",
    start: "top top",
    end: "bottom center",
    scrub: true
  },
  top: "335px",
  ease: "power2.out"
});

gsap.to(".bix_img_about_people_parallax", {
  scrollTrigger: {
    trigger: ".section_about_parallax",
    start: "top top",
    end: "bottom center",
    scrub: true
  },
  top: "190px",
  ease: "power2.out"
});