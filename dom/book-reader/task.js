const size = document.getElementsByClassName("font-size");
const colorText = document.querySelector("div.book__control_color");
const colorBackground = document.querySelector("div.book__control_background");

const content = document.querySelector("div.book__content");

function changeSize (event) {
	event.preventDefault();
	for (let i = 0; i < size.length; i++) {
		size.item(i).classList.remove("font-size_active");
	}
	content.classList.remove("book_fs-big", "book_fs-small");
	event.target.classList.add("font-size_active");
	if (event.target.classList.contains("font-size_small")) {
		content.classList.add("book_fs-small");
	} else if (event.target.classList.contains("font-size_big")) {
		content.classList.add("book_fs-big");
	}
}

function changeColor (event) {
	event.preventDefault();
	for (let i = 0; i < colorText.querySelectorAll("a.color").length; i++) {
		colorText.querySelectorAll("a.color").item(i).classList.remove("color_active");
	}
	content.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");
	event.target.classList.add("color_active");
	if (event.target.classList.contains("text_color_black")) {
		content.classList.add("book_color-black");
	} else if (event.target.classList.contains("text_color_gray")) {
		content.classList.add("book_color-gray");
	} else {
		content.classList.add("book_color-whitesmoke");
	}
}

function changeBackground (event) {
	event.preventDefault();
	for (let i = 0; i < colorBackground.querySelectorAll("a.color").length; i++) {
		colorBackground.querySelectorAll("a.color").item(i).classList.remove("color_active");
	}
	content.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white");
	event.target.classList.add("color_active");
	if (event.target.classList.contains("bg_color_black")) {
		content.classList.add("book_bg-black");
	} else if (event.target.classList.contains("bg_color_gray")) {
		content.classList.add("book_bg-gray");
	} else {
		content.classList.add("book_bg-white");
	}
}

for (let i = 0; i < size.length; i++) {
	size.item(i).addEventListener("click", changeSize);
	colorText.querySelectorAll("a.color").item(i).addEventListener("click", changeColor);
	colorBackground.querySelectorAll("a.color").item(i).addEventListener("click", changeBackground);
}