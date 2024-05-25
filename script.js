function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.getElementById("ccright").innerHTML="Copyright &copy; " + new Date().getFullYear() + " - All Rights Reserved";
