const inputWindow = document.getElementById('editor');

inputWindow.value = localStorage.getItem('text');

inputWindow.addEventListener('input', () => localStorage.setItem('text', inputWindow.value));

const button = document.getElementById('clear');

button.addEventListener('click', () => {
	localStorage.removeItem('text');
	inputWindow.value = '';
});

