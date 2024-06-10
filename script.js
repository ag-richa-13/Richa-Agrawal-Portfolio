document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu a");
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".menu-icon");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      menuLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to the clicked link
      this.classList.add("active");

      // Hide menu after clicking a link
      if (window.innerWidth <= 768) {
        menu.classList.remove("active");
      }
    });
  });

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
