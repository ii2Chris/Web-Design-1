document.addEventListener("DOMContentLoaded", () => {
  const desktop = document.querySelector(".header-content-left");
  const tablet = document.querySelector(".header-content-middle");
  const mobile = document.querySelector(".header-content-right");
  const poster = document.querySelector(".poster");

  desktop.addEventListener("click", () => {
    poster.classList.remove("tablet-layout", "mobile-layout");
    desktop.classList.add("active");
    tablet.classList.remove("active");
    mobile.classList.remove("active");
  });

  tablet.addEventListener("click", () => {
    poster.classList.add("tablet-layout");
    poster.classList.remove("mobile-layout");
    tablet.classList.add("active");
    desktop.classList.remove("active");
    mobile.classList.remove("active");
  });

  mobile.addEventListener("click", () => {
    poster.classList.add("mobile-layout");
    poster.classList.remove("tablet-layout");
    mobile.classList.add("active");
    desktop.classList.remove("active");
    tablet.classList.remove("active");
  });
});
