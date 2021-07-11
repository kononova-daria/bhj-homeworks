const progress = document.getElementById('progress');
const button = document.getElementById('send');

function sendFile (event) {
	event.preventDefault();

	let formData = new FormData(document.getElementById('form'));
	let xhr = new XMLHttpRequest();

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.upload.onprogress = function (event) {
		progress.value = event.loaded / event.total;
	}
	xhr.send(formData);
}

button.addEventListener('click', sendFile);

