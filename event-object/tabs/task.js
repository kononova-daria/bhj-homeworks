const navigation = Array.from(document.getElementsByClassName("tab"));
const content = document.getElementsByClassName("tab__content");

function clickNavigation (event) {
	for (let i = 0; i < navigation.length; i++) {
		navigation[i].classList.remove("tab_active");
		content.item(i).classList.remove("tab__content_active");
	}
	
	event.target.classList.add("tab_active");
	
	let index = navigation.indexOf(event.target);

	content.item(index).classList.add("tab__content_active");
}

for (let i = 0; i < navigation.length; i++) {
	navigation[i].addEventListener("click", clickNavigation);
}