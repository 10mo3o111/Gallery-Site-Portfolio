const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelectorAll(".nav__link");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded");
  if (expanded === "false") {
    hamburger.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-hidden", "false");
  } else {
    hamburger.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", "true");
  }
});

navlinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    hamburger.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", "true");
    document.body.focus();
  });
});
