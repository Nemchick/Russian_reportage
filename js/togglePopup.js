function togglePopup(popupId) {
  const popup = document.getElementById(popupId);
  const popups = document.getElementsByClassName('popup');

  for (let i = 0; i < popups.length; i++) {
    if (popups[i].id !== popupId) {
      popups[i].classList.remove('active');
    }
  }

  popup.classList.toggle('active');
}