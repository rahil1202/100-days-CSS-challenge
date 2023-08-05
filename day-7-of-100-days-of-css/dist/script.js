const btnMenu = document.querySelector(".menu-icon");
const btnSearch = document.querySelector(".bx-search-alt");

btnSearch.addEventListener("click", () =>{
	const searchInput = document.querySelector(".input-search");
	searchInput.classList.toggle("active");
})

btnMenu.addEventListener("click", () =>{
	const menu = document.querySelector(".frame");
	menu.classList.toggle("active");
})