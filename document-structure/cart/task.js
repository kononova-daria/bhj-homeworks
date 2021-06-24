const quantityControl = document.getElementsByClassName('product__quantity-control');

function changeQuantity () {
	const quantity = this.parentElement.querySelector('.product__quantity-value');
	if (this.classList.contains('product__quantity-control_dec') && +quantity.textContent > 1) {
		quantity.textContent = +quantity.textContent - 1;
	} else if (this.classList.contains('product__quantity-control_inc')) {
		quantity.textContent = +quantity.textContent + 1;
	}
}

for (let i = 0; i < quantityControl.length; i++) {
	quantityControl.item(i).addEventListener('click', changeQuantity);
}

const cart = document.querySelector('.cart__products');
const button = document.getElementsByClassName('product__add');

function addingProduct () {
	const product = this.closest('.product');
	const count = product.querySelector('.product__quantity-value');
	const image = product.querySelector('.product__image');
	
	let productCart = '';

	for (let i = 0; i < cart.children.length; i++) {
		if (cart.children.item(i).dataset.id === product.dataset.id) {
			productCart = cart.children.item(i);
			break;
		}
	}

	if (productCart === '') {
		cart.insertAdjacentHTML('beforeEnd', '<div class="cart__product" data-id="1"><img class="cart__product-image" src="image.png"><div class="cart__product-count">20</div></div>');

		productCart = cart.lastElementChild;
		const imageCart = productCart.querySelector('.cart__product-image');
		const countCart = productCart.querySelector('.cart__product-count');

		productCart.dataset.id = product.dataset.id;
		imageCart.setAttribute('src', image.getAttribute('src'));
		countCart.textContent = count.textContent;
	} else {
		const countCart = productCart.querySelector('.cart__product-count');
		countCart.textContent = count.textContent;
	}
}

for (let i = 0; i < button.length; i++) {
	button.item(i).addEventListener('click', addingProduct);
}