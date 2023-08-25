document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".mobileNav").classList.toggle("expanded");

  document.querySelector(".mobileNav-links").classList.toggle("expanded-links");
});
