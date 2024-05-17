const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
const floatingBtn = document.querySelector(".floating-btn .fab-btn");

document.addEventListener("scroll", () => {
	if (scrollY > navbar.offsetHeight - 50) navbar.classList.add("sticky");
	else navbar.classList.remove("sticky");

	// For flocating button
	if (scrollY > hero.offsetHeight - 50) floatingBtn.classList.add("active");
	else floatingBtn.classList.remove("active");
});

// floatingBtn.addEventListener("click", () => {});

const hamburgerIconCont = document.querySelector("nav > .nav-btn > label");
const hamburgerIcons = document.querySelectorAll(
	"nav > .nav-btn > label > span"
);

hamburgerIcons.forEach((hamIcon) => {
	hamburgerIconCont.addEventListener("click", () => {
		hamIcon.classList.toggle("active");
	});
});
