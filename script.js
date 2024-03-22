const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click",() =>{
	navMenu.classList.toggle("active");
	hamburger.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click",() =>{
		navMenu.classList.remove("active");
		hamburger.classList.remove("active");
	})
);
