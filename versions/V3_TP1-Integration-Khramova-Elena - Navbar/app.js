document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon'),
    mainMenu = document.getElementById('main-menu'),
    websiteWrapper = document.getElementById('website-wrapper');

  menuIcon.addEventListener('click', function () {
    mainMenu.classList.toggle('opened-menu');
    menuIcon.classList.toggle('closed');
    websiteWrapper.classList.toggle('website-wrapper');
  });
});
