gsap.registerPlugin(ScrollTrigger);

gsap.to(".about_gradient", {
  scrollTrigger: {
    trigger: ".section_about_animation",
    start: "top top",
    end: "bottom center",
    scrub: true
  },
  height: 0,
  ease: "power2.out"
});
