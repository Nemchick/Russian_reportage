const ACTIVE_SLIDE_CLASSNAME = "gallery_slide_active";

const slidesNodes = Array.from(document.querySelectorAll(".gallery_slide"));
const prevButtonNode = document.querySelector(".slaider_control_prev");
const nextButtonNode = document.querySelector(".slaider_control_next");
const timerProgressElement = document.getElementById("timerProgress");
let timerProgressInterval;
let activeId;
let isFirstProgressFill = true;
let touchStartX;

init();

function init() {
  activeId = 0;

  prevButtonNode.addEventListener("click", () => {
    setActiveSlideById(getPrevId());
  });

  nextButtonNode.addEventListener("click", () => {
    setActiveSlideById(getNextId());
  });

  // Add touchstart event listener
  document.addEventListener("touchstart", touchStartHandler);
  // Add touchend event listener
  document.addEventListener("touchend", touchEndHandler);

  updateSlideCounter();

  timerProgressInterval = setInterval(() => {
    updateTimerProgress();
    if (timerProgressElement.value === 0) {
      if (isFirstProgressFill) {
        isFirstProgressFill = false;
      } else {
        setActiveSlideById(getNextId());
      }
      resetTimerProgress();
    }
  }, 50);


}

// Touchstart event handler
function touchStartHandler(event) {
  touchStartX = event.touches[0].clientX;
}

// Touchend event handler
function touchEndHandler(event) {
  const touchEndX = event.changedTouches[0].clientX;
  const deltaX = touchEndX - touchStartX;

  if (deltaX > 0) {
    // Swipe right, go to previous slide
    setActiveSlideById(getPrevId());
  } else if (deltaX < 0) {
    // Swipe left, go to next slide
    setActiveSlideById(getNextId());
  }
}

function updateTimerProgress() {
  timerProgressElement.value += 1; // увеличиваем значение прогресса на 1
  if (timerProgressElement.value === 100) {
    setActiveSlideById(getNextId());
    resetTimerProgress();
  }
}

function resetTimerProgress() {
  clearInterval(timerProgressInterval);
  timerProgressElement.value = 0;

  timerProgressInterval = setInterval(() => {
    updateTimerProgress();
    if (timerProgressElement.value === 100) {
      resetTimerProgress();
    }
  }, 50);
}

function setActiveSlideById(id) {
  const currentId = activeId;
  activeId = id;

  slidesNodes[currentId].style.transform = "translateX(-100%)";
  slidesNodes[activeId].style.transform = "translateX(0)";
  slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME);
  slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME);

  resetTimerProgress(); // Сбросить таймер

  updateSlideCounter();
}

function updateSlideCounter() {
  const currentSlideCounterElement = document.getElementById(
    "currentSlideCounter"
  );
  currentSlideCounterElement.textContent = activeId + 1;

  const totalSlidesCounterElement =
    document.getElementById("totalSlidesCounter");
  totalSlidesCounterElement.textContent = slidesNodes.length;
}

function getPrevId() {
  return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
  return activeId === slidesNodes.length - 1 ? 0 : activeId + 1;
}
