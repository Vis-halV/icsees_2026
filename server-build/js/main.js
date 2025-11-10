window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    const icon = hamburger.querySelector("img");
    icon.src = navLinks.classList.contains("show")
      ? "./assets/icons/xmark-solid-full.svg"
      : "./assets/icons/bars-solid-full.svg";
  });
}
