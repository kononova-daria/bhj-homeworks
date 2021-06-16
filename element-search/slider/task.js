const images = document.getElementsByClassName("slider__item");

function active () {
	for (let i = 0; i < images.length; i++) {
		if (images.item(i).className === "slider__item slider__item_active") {
			return i;
		}
	}
}

function setActiveImage (index) {
	images.item(index).classList.add("slider__item_active");
	points.item(index).classList.add("slider__dot_active");
}

function hideImage (index) {
	images.item(index).classList.remove("slider__item_active");
	points.item(index).classList.remove("slider__dot_active");
}

const right = document.querySelector("div div.slider__arrow_next");
const left = document.querySelector("div div.slider__arrow_prev");

const points = document.getElementsByClassName("slider__dot");

right.onclick = function () {
	let index = active();
	hideImage(index);
	if (index === (images.length - 1)) {
		setActiveImage(0);
	} else {
		setActiveImage(index + 1);
	}
}

left.onclick = function () {
	let index = active();
	hideImage(index);
	if (index === 0) {
		setActiveImage(images.length - 1);
	} else {
		setActiveImage(index - 1);
	}
}

for (let i = 0; i < points.length; i++) {
	points.item(i).onclick = function () {
		for (let i = 0; i < points.length; i++) {
			hideImage(i);
		}
		setActiveImage(i);
	}
}