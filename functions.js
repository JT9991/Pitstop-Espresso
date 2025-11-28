function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const burger = document.getElementById("hamburger");

  menu.classList.toggle("open");
  burger.classList.toggle("active");
  document.body.classList.toggle('menu-open');

}
