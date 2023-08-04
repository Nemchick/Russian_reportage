ScrollTrigger.create({
    trigger: ".section_about_animation",
    start: "top top",
    end: "bottom center",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const bottomValue = 340 - (progress * 340);
      const horizontalValue = 72 + (progress * 624); // Диапазон смещения: 72px до 696px
      let heightValue;
      
      if (self.direction === -1) {
        // Возвращение about_gradient в прежнее состояние
        gsap.to(".about_gradient", {
          height: "100%",
          ease: "power2.out"
        });
      } else {
        if (progress > 0.5) {
          // Уменьшение высоты от 100% до 0%
          heightValue = ((1 - progress) * 100) + "%";
        } else {
          // Увеличение высоты от 0% до 100%
          heightValue = (progress * 100) + "%";
        }
  
        gsap.to(".about_gradient", {
          height: heightValue,
          ease: "power2.out"
        });
      }
      
      gsap.to(".about_animation_logo_left", {
        bottom: bottomValue,
        left: horizontalValue,
        ease: "power1.out"
      });
      
      gsap.to(".about_animation_logo_right", {
        bottom: bottomValue,
        right: horizontalValue,
        ease: "power1.out"
      });
    }
  });
