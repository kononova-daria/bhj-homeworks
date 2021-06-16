const rotators = document.getElementsByClassName("rotator");

let time = 1000;

function changingVisibility (time) {
	for (let i = 0; i < rotators.length; i++) {
		let visibleElement = rotators.item(i).querySelector("span.rotator__case_active");
		visibleElement.classList.remove("rotator__case_active");
		if (visibleElement.nextElementSibling !== null) {
			visibleElement.nextElementSibling.classList.add("rotator__case_active");
			visibleElement.nextElementSibling.style.color = visibleElement.nextElementSibling.dataset.color;
			time = visibleElement.nextElementSibling.dataset.speed;
			return time;
		} else {
			rotators.item(i).firstElementChild.classList.add("rotator__case_active");
			rotators.item(i).firstElementChild.style.color = rotators.item(i).firstElementChild.dataset.color;
			time = rotators.item(i).firstElementChild.dataset.speed;
			return time;
		}
	}
}

let interval = setTimeout(function timeCycle () {
	time = changingVisibility(time);
	interval = setTimeout(timeCycle, time);
}, time);



