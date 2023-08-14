
const boxMediaNewsPages = document.querySelector(".box_media_news_pages");


boxMediaNewsPages.addEventListener("click", function (event) {
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