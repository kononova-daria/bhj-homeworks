const images = document.getElementsByClassName("slider__item");

function active () {
	for (let i = 0; i < images.length; i++) {
		if (images.item(i).className === "slider__item slider__item_active") {
			return i;
		}
	}
}

const right = document.querySelector("div div.slider__arrow_next");
const left = document.querySelector("div div.slider__arrow_prev");

const points = document.getElementsByClassName("slider__dot");

right.onclick = function () {
	let index = active();
	images.item(index).classList.remove("slider__item_active");
	points.item(index).classList.remove("slider__dot_active");
	if (index === (images.length - 1)) {
		images.item(0).classList.add("slider__item_active");
		points.item(0).classList.add("slider__dot_active");
	} else {
		images.item(index + 1).classList.add("slider__item_active");
		points.item(index + 1).classList.add("slider__dot_active");
	}
}

left.onclick = function () {
	let index = active();
	images.item(index).classList.remove("slider__item_active");
	points.item(index).classList.remove("slider__dot_active");
	if (index === 0) {
		images.item(images.length - 1).classList.add("slider__item_active");
		points.item(images.length - 1).classList.add("slider__dot_active");
	} else {
		images.item(index - 1).classList.add("slider__item_active");
		points.item(index - 1).classList.add("slider__dot_active");
	}
}

for (let i = 0; i < points.length; i++) {
	points.item(i).onclick = function () {
		for (let i = 0; i < points.length; i++) {
			points.item(i).classList.remove("slider__dot_active");
			images.item(i).classList.remove("slider__item_active");
		}
		points.item(i).classList.add("slider__dot_active");
		images.item(i).classList.add("slider__item_active");
	}
}