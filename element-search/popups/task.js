const popup = document.getElementById("modal_main");
const popupSuccess = document.getElementById("modal_success");

popup.classList.add("modal_active");

const close = document.getElementsByClassName("modal__close");
const success = document.getElementsByClassName("show-success");

for (let i = 0; i < close.length; i++) {
	close.item(i).onclick = function () {
		popup.classList.remove("modal_active");
		popupSuccess.classList.remove("modal_active");
	}
}

success.item(0).onclick = function () {
	popup.classList.remove("modal_active");
	popupSuccess.classList.add("modal_active");
}



