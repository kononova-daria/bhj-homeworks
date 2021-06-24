const answersRobot = ['Добрый день! До свидания!', 'Где ваша совесть?', 'Кто тут?', 'К сожалению, все операторы сейчас заняты. Не пишите нам больше'];

const badge = document.querySelector('div.chat-widget');

badge.addEventListener('click', () => badge.classList.add('chat-widget_active'));

const inputWindow = document.getElementById('chat-widget__input');
const chat = document.querySelector('div.chat-widget__messages');

let numberOfMessages = 0;

function setTime (time) {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();

	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;

	time.textContent = `${hours}:${minutes}`;
}

function sendingMessage (e) {
	e = e || window.event;
	if (e.keyCode === 13 && inputWindow.value !== '') {
		chat.innerHTML += '<div class="message message_client"><div class="message__time">22:10</div><div class="message__text">Добрый день!</div></div>';

		const messageClient = chat.lastElementChild;
		const timeClient = messageClient.querySelector('div.message__time');

		setTime(timeClient);

		const textClient = messageClient.querySelector('div.message__text');

		textClient.textContent = inputWindow.value;

		inputWindow.value = "";

		chat.innerHTML += '<div class="message"><div class="message__time">22:10</div><div class="message__text">Добрый день!</div></div>';

		const messageRobot = chat.lastElementChild;

		const timeRobot = messageRobot.querySelector('div.message__time');

		setTime(timeRobot);

		const textRobot = messageRobot.querySelector('div.message__text');

		let index = Math.floor(Math.random() * 10);

		while (index > answersRobot.length - 1) {
			index = Math.floor(Math.random() * 10);
		}

		textRobot.textContent = answersRobot[index];
	}
}

inputWindow.addEventListener('keyup', sendingMessage);