const links = document.getElementsByClassName('has-tooltip');

function showHint (event) {
	event.preventDefault();

	const hint = this.nextElementSibling;
	const text = this.getAttribute('title');

	hint.textContent = text;
	hint.setAttribute('style', `top: ${this.getBoundingClientRect().top + 20}px; left: ${this.getBoundingClientRect().left}px;`);

	if (hint.classList.contains('tooltip_active')) {
		hint.classList.remove('tooltip_active');
	} else {
		if (document.querySelector('.tooltip_active') !== null) {
			document.querySelector('.tooltip_active').classList.remove('tooltip_active');
		}
		hint.classList.add('tooltip_active');
	}
}

for (let i = 0; i < links.length; i++) {
	links.item(i).insertAdjacentHTML('afterEnd', '<div class="tooltip">Текст подсказки</div>');
	links.item(i).addEventListener('click', showHint);
}