let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', false);
xhr.send();

if (xhr.readyState === xhr.DONE && xhr.status === 200) {
	const survey = JSON.parse(xhr.response);
	console.log(survey);

	const question = document.getElementById('poll__title');
	question.textContent = survey.data.title;

	const buttons = document.getElementById('poll__answers');
	for (let i = 0; i < survey.data.answers.length; i++) {
		buttons.insertAdjacentHTML('beforeEnd', '<button class="poll__answer">Хорошо</button>');
		buttons.lastChild.textContent = survey.data.answers[i];
	}

	const answers = buttons.querySelectorAll('.poll__answer');
	for (let i = 0; i < answers.length; i++) {
		answers.item(i).addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
	}
}