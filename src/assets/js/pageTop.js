const pageTop = document.querySelector(".footer");
const pageTopText = document.querySelector(".footer__toppage");

pageTop.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  const halfPageHeight = document.body.scrollHeight / 5;
  if (window.scrollY > halfPageHeight) {
    pageTopText.textContent = "Page Top";
    pageTopText.classList.remove("--rising");
  } else {
    pageTopText.textContent = "Scroll";
    pageTopText.classList.add("--rising");
  }
});
