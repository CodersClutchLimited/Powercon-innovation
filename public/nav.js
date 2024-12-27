document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.getElementById("burger-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  burgerIcon.addEventListener("click", () => {
      if (mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.remove("hidden");
          mobileMenu.classList.add("translate-y-0");
      } else {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("translate-y-0");
      }
  });
});
