const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// implimenting transition of the navbar on reduced window size
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

//implimenting typed js fuctionality
var Typed = new Typed("#hero-span", {
  strings: ["AFRO REALTOR FOR", "HOUSING SOLUTIONS"],
  typeSpeed: 60,
  loop: true,
});
//ANIMATION ON SCROLL-->
AOS.init();
