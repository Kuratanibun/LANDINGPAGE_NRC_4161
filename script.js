const menuToggle = document.getElementById("menuToggle");
const menuHorizontal = document.getElementById("menuHorizontal");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  menuHorizontal.classList.toggle("active");
});

function toggleSubmenu(event) {
  if (window.innerWidth <= 768) {
    event.preventDefault();
    const parentLi = event.target.parentElement;
    parentLi.classList.toggle("submenu-open");
  }
}

document.addEventListener("click", function (event) {
  const isClickInsideMenu = menuHorizontal.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnToggle &&
    menuHorizontal.classList.contains("active")
  ) {
    menuToggle.classList.remove("active");
    menuHorizontal.classList.remove("active");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menuToggle.classList.remove("active");
    menuHorizontal.classList.remove("active");

    const openSubmenus = document.querySelectorAll(".submenu-open");
    openSubmenus.forEach(function (submenu) {
      submenu.classList.remove("submenu-open");
    });
  }
});
