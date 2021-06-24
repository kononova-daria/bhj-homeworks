const inputWindow = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');

const tasks = document.querySelector('.tasks__list');

const deleteButton = [];

function removeMessage () {
	this.parentElement.remove();
}

function sendingMessage (event) {
	event.preventDefault();

	if (inputWindow.value !== '') {
		tasks.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title">Сходить в магазин</div><a href="#" class="task__remove">&times;</a></div>');

		const lastTask = tasks.lastElementChild;
		const textTask = lastTask.querySelector('.task__title');

		textTask.textContent = inputWindow.value;

		inputWindow.value = '';

		deleteButton.push(lastTask.querySelector('.task__remove'));
	}

	for (let i = 0; i < deleteButton.length; i++) {
		deleteButton[i].addEventListener('click', removeMessage);
	}
}

inputWindow.addEventListener('keyup', (e) => {
	e = e || window.event;
	if (e.keyCode === 13) {
		sendingMessage;
	}
});

button.addEventListener('click', sendingMessage);





