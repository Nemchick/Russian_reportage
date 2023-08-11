const slideVidioSlide2 = document.querySelector(".slide_vidio_slide_2");
const slideVidioSlide1 = document.querySelector(".slide_vidio_slide_1");

slideVidioSlide2.addEventListener("click", function (event) {
  event.preventDefault();
  openVideo("https://www.youtube.com/embed/Ip44RbkH8WI");
});

slideVidioSlide1.addEventListener("click", function (event) {
  event.preventDefault();
  openVideo("https://www.youtube.com/embed/Ip44RbkH8WI");
});

function openVideo(videoUrl) {
  const videoIframe = document.getElementById("video-iframe");
  videoIframe.setAttribute("src", videoUrl);

  $.fancybox.open({
    src: "#video-container",
    type: "inline",
    touch: false,
    afterClose: function () {
      videoIframe.setAttribute("src", "");
    },
  });
}
