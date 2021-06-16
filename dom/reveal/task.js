const element = document.getElementsByClassName("reveal");

function searchItem () {
	const viewportHeight = window.innerHeight;
	for (let i = 0; i < element.length; i++) {
		let itemTop = element.item(i).getBoundingClientRect().top;
		let itemBottom = element.item(i).getBoundingClientRect().bottom;
		if (itemTop < viewportHeight) element.item(i).classList.add("reveal_active");
		if (itemBottom < 0 || itemTop > viewportHeight) element.item(i).classList.remove("reveal_active");
	}
}

window.addEventListener("scroll", searchItem);