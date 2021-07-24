let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = function () {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		const image = document.getElementById('loader');
		image.classList.remove('loader_active');

		const items = document.getElementById('items');
		const data = JSON.parse(xhr.response);

		for (let key in data.response.Valute) {
			items.insertAdjacentHTML('beforeEnd', '<div class="item"><div class="item__code">USD</div><div class="item__value">32</div><div class="item__currency">руб.</div></div>');

			items.lastChild.querySelector('.item__code').textContent = data.response.Valute[key].CharCode;
			items.lastChild.querySelector('.item__value').textContent = data.response.Valute[key].Value;
		}
	}
}

