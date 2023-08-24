ScrollTrigger.create({
  trigger: ".section_about_animation",
  start: "top top",
  end: "bottom center",
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress;
    const containerWidth = document.querySelector(
      ".section_about_animation"
    ).offsetWidth;
    const containerHeight = document.querySelector(
      ".section_about_animation"
    ).offsetHeight;
    const bottomValue = ((378 - progress * 468) / containerHeight) * 100;
    const horizontalValue = ((72 + progress * 533) / containerWidth) * 100;
    let heightValue;

    if (self.direction === -1) {
      // Возвращение about_gradient в прежнее состояние
      gsap.to(".about_gradient", {
        height: "80%",
        ease: "power2.out",
        
      });
      
      gsap.to(".about_animation_logo_left", {
        bottom: `${56}%`,
        left: `${5}%`,
        ease: "power1.inOut",
        duration: 1, // Добавленная опция duration
      });

      gsap.to(".about_animation_logo_right", {
        bottom: `${56}%`,
        right: `${5}%`,
        ease: "power1.inOut",
        duration: 1, // Добавленная опция duration
      });
    } else {
      if (progress > 0.5) {
        // Уменьшение высоты от 100% до 0%
        heightValue = (1 - progress) * 100 + "%";
      } else {
        // Увеличение высоты от 0% до 100%
        heightValue = progress * 100 + "%";
      }
      gsap.to(".about_animation_logo_left", {
        bottom: `${0}%`,
        left: `${45.8}%`,
        ease: "power1.inOut",
        duration: 1, // Добавленная опция duration
      });

      gsap.to(".about_animation_logo_right", {
        bottom: `${0}%`,
        right: `${45.8}%`,
        ease: "power1.inOut",
        duration: 1, // Добавленная опция duration
      });

      gsap.to(".about_gradient", {
        height: heightValue,
        ease: "power2.out",
      });
    }

    
  },
});
// if (containerWidth >= 1399) {
    //   gsap.to(".about_animation_logo_left", {
    //     bottom: `${0}%`,
    //     left: `${45.633}%`,
    //     ease: "power1.out"
    //   });

    //   gsap.to(".about_animation_logo_right", {
    //     bottom: `${0}%`,
    //     right: `${45.633}%`,
    //     ease: "power1.out"
    //   });
    // }else if (containerWidth >= 695){
    //   gsap.to(".about_animation_logo_left", {
    //     bottom: `${0}%`,
    //     left: `${45.9}%`,
    //     ease: "power1.out"
    //   });

    //   gsap.to(".about_animation_logo_right", {
    //     bottom: `${0}%`,
    //     right: `${45.9}%`,
    //     ease: "power1.out"
    //   });
    // }else{
    //   gsap.to(".about_animation_logo_left", {
    //     bottom: `${0}%`,
    //     left: `${41.6}%`,
    //     ease: "power1.out"
    //   });

    //   gsap.to(".about_animation_logo_right", {
    //     bottom: `${0}%`,
    //     right: `${41.6}%`,
    //     ease: "power1.out"
    //   });
    // }