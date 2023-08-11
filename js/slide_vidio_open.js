const slideVidio = document.querySelector('.slide_vidio_slide_2');

// Добавляем обработчик события click
slideVidio.addEventListener('click', function(event) {
  event.preventDefault(); // Предотвращаем переход по ссылке
  openVideo(); // Открываем видео
});

// Функция для открытия видео
function openVideo() {
  const videoUrl = 'https://www.youtube.com/embed/w0m2C3lN1h8'; // Ссылка на YouTube видео с включенной автозапуском
  const videoIframe = document.getElementById('video-iframe');
  
  videoIframe.setAttribute('src', videoUrl); // Устанавливаем ссылку на видео в атрибут src iframe
  $.fancybox.open({
    src: '#video-container',
    type: 'inline',
    touch: false, // Отключаем жесты прокрутки на мобильных устройствах
    afterClose: function() {
      videoIframe.setAttribute('src', ''); // Обнуляем ссылку на видео после закрытия модального окна
    }
  });
}