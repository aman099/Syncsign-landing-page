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

//
const progressBarFill1 = document.querySelector(".progress-bar-fill-1");
const progressBarFill2 = document.querySelector(".progress-bar-fill-2");

const options = {};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			progressBarFill1.classList.add("fill");
		} else {
			progressBarFill1.classList.remove("fill");
		}
	});
}, options);

observer.observe(progressBarFill1);

const options2 = {};

const observer2 = new IntersectionObserver(function (entries, observer2) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			progressBarFill2.classList.add("fill");
		} else {
			progressBarFill2.classList.remove("fill");
		}
	});
}, options2);

observer2.observe(progressBarFill1);
