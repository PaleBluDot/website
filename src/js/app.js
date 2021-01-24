console.log('e11ty Connected');

let lightMode = localStorage.getItem('lightMode');
let announcement = sessionStorage.getItem('announcement');

const body = document.querySelector('body');
const darkIcon = document.querySelector('.dm-icon');
const menuIcon = document.querySelector('#menuIcon');
const closeMenu = document.querySelector('#closeMenu');
const closeAnnouncement = document.querySelector('#announcementClose');

if (closeAnnouncement) {
  closeAnnouncement.addEventListener('click', () => {
    closeAnnouncement.style.display = 'none';
    sessionStorage.setItem('announcement', null);
  });
}

if (sessionStorage.getItem('announcement', null)) {
  closeAnnouncement.style.display = 'none';
}

menuIcon.addEventListener('click', function () {
  console.log('clicked');
  // TODO: ADD MENU REVEAL
});

const lightModeEnabled = () => {
  body.classList.add('light-mode');
  localStorage.setItem('lightMode', 'enabled');
};

const lightModeDisabled = () => {
  body.classList.remove('light-mode');
  localStorage.setItem('lightMode', null);
};

if (lightMode === 'enabled') {
  lightModeEnabled();
}

darkIcon.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode');

  if (lightMode !== 'enabled') {
    lightModeEnabled();
  } else {
    lightModeDisabled();
  }
});
