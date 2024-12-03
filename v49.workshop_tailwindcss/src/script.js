const hamburger = document.getElementById("showNavMobile");
const mobileNav = document.getElementById("displayNav");

console.log(hamburger);
console.log(mobileNav);

hamburger.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("flex");
  mobileNav.classList.add("md:hidden");
  hamburger.classList.add("hidden");
});

const closeNav = document.getElementById("closeNav");
console.log(closeNav);

closeNav.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
  mobileNav.classList.remove("flex");
  mobileNav.classList.remove("md:hidden");
  hamburger.classList.remove("hidden");
});
