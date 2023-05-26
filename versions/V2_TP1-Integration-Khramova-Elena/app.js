document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon"),
    mainMenu = document.getElementById("main-menu");

  menuIcon.addEventListener("click", function () {
    mainMenu.classList.toggle("opened-menu");
    menuIcon.classList.toggle("closed");
  });
});
