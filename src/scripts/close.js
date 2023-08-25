document.querySelector(".hamburger").addEventListener("click", () => {
  let line = document.querySelectorAll(".line");
  line.forEach((el) => el.classList.toggle("line-expanded"));
  document.querySelector(".xmark").classList.toggle("xmark-expanded");
});
