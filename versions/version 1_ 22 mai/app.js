document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon'),
    mainMenu = document.getElementById('main-menu');

  menuIcon.addEventListener('click', function () {
    mainMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('closed');
  });
});
