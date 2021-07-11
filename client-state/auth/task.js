const input = document.getElementById('signin');

const greeting = document.getElementById('welcome');
const id = document.getElementById('user_id');

if (localStorage.getItem('id')) {
	greeting.classList.add('welcome_active');
	id.textContent = localStorage.getItem('id');
} else {
	input.classList.add('signin_active');
}

const buttonLogin = document.getElementById('signin__btn');

function logIn (event) {
	event.preventDefault();

	let xhr = new XMLHttpRequest();
	let data = new FormData(document.getElementById('signin__form'));

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', false);
	xhr.send(data);

	const answer = JSON.parse(xhr.response);

	if (answer.success === true) {
		localStorage.setItem('id', answer.user_id);

		input.classList.remove('signin_active');

		greeting.classList.add('welcome_active');
		id.textContent = answer.user_id;
	} else {
		const loginDetails = document.getElementsByClassName('control');
		for (let i = 0; i < 2; i++) {
			loginDetails.item(i).value = '';
		}

		alert('Неверный логин/пароль');
	}

}

buttonLogin.addEventListener('click', logIn);

const buttonLogout = document.getElementById('logout__btn');

function logOut (event) {
	event.preventDefault();

	localStorage.clear();

	greeting.classList.remove('welcome_active');
	input.classList.add('signin_active');
}

buttonLogout.addEventListener('click', logOut);

