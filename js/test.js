var controller = new ScrollMagic.Controller(); 

// container pin
var startpin = new ScrollMagic.Scene({
  triggerElement: ".container_text", // Указываем, что скролл нужно считать внутри блока .container_text
  duration: 200 // Длительность сцены в пикселях (от начала до конца сцены)
})
.setPin(".container_text") // Закрепление элемента с классом ".container_text" во время сцены
.addTo(controller); // Добавление сцены к контроллеру

// tween
var tl = new TimelineMax(); 

tl.add(
	TweenMax.to(".svg-container", 1, {scale: 10, transformOrigin: "50%, 50%", ease:Power2.easeInOut}).delay(1), 
  )
  
  tl.add( 
	TweenMax.to(".svg-container", 1, {opacity: 0, ease:Power2.easeInOut}), // Задержка в 1 секунду
  )

new ScrollMagic.Scene({
  triggerElement: ".container_text", // Указываем, что скролл нужно считать внутри блока .container_text
  duration: 1400// Длительность сцены в пикселях (от начала до конца сцены)
})
.setTween(tl) // Привязка анимационной последовательности к сцене
.addTo(controller);



