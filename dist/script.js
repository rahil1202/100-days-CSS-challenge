const imageFrames = document.querySelectorAll(".imageFrame");
const menu = document.querySelector(".menu");

const menuHeader = document.querySelector(".header");
const menuContent = document.querySelector(".content");
const cross = document.querySelector(".cross");
const icon = document.querySelector(".icon");

imageFrames.forEach((imageFrame) => {
	imageFrame.addEventListener("click", () => {
		menuHeader.classList.remove("headerToUp");
		menuContent.classList.remove("contentToDown");
		cross.classList.remove("crossToUp");
		icon.classList.remove("iconToUp");
		
		menuHeader.classList.add("headerToDown");
		menuContent.classList.add("contentToUp");
		cross.classList.add("crossToDown");
		icon.classList.add("iconToDown");
		
		menu.style.display = "block";
	});
});

cross.addEventListener("click", () => {
	menuHeader.classList.add("headerToUp");
	menuContent.classList.add("contentToDown");
	cross.classList.add("crossToUp");
	icon.classList.add("iconToUp");
	
	menuHeader.classList.remove("headerToDown");
	menuContent.classList.remove("contentToUp");
	cross.classList.remove("crossToDown");
	icon.classList.remove("iconToDown");

});