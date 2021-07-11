const popup = document.getElementById('subscribe-modal');

function getCookie (name) {
	const value = '; ' + document.cookie;
	let parts = value.split('; ' + name + '=');
	if (parts.length === 2) {
		return parts.pop().split(';').shift();
	}
}

if (getCookie('closed') !== 'true') {
	popup.classList.add('modal_active');
}

const close = document.getElementsByClassName('modal__close');

for (let i = 0; i < close.length; i++) {
	close.item(i).onclick = function () {
		popup.classList.remove('modal_active');
		document.cookie = 'closed=true';
	}
}