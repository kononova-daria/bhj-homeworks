const links = document.getElementsByClassName("menu__link");
let allMenuSub = document.getElementsByClassName("menu_sub");

for (let i = 0; i < links.length; i++) {
	links.item(i).onclick = function () {
		let menu = links.item(i).closest("li");
		let menuSub = menu.querySelector("ul.menu_sub");
		if (menuSub !== null) {
			if (menuSub.classList.contains("menu_active")) {
				menuSub.classList.remove("menu_active");
				return false;
			} else {
				for (let i = 0; i < allMenuSub.length; i++) {
					allMenuSub.item(i).classList.remove("menu_active");
				}
				menuSub.classList.add("menu_active");
				return false;
			}	
		}
	}
}