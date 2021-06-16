const button = document.getElementsByClassName("dropdown");

function clickButton () {
	const list = this.querySelector("ul.dropdown__list");
	const value = this.querySelector("div.dropdown__value");
	const listItems = list.getElementsByClassName("dropdown__item");
	const links = list.getElementsByClassName("dropdown__link");

	list.classList.toggle("dropdown__list_active");

	function clickItem () {
		const link = this.querySelector("a.dropdown__link");
		value.textContent = link.textContent;
	}

	for (let i = 0; i < listItems.length; i++) {
		links.item(i).onclick = () => false;
		listItems.item(i).addEventListener("click", clickItem);
	}
}

for (let i = 0; i < button.length; i++) {
	button.item(i).addEventListener("click", clickButton);
}