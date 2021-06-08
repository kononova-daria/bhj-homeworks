const cookie = document.getElementById("cookie");

const widthOld = cookie.width;
const widthNew = widthOld * 1.5;

const counter = document.getElementById("clicker__counter");
let start;
let timeStart;

cookie.onclick = function () {
	let result = Number(counter.textContent) + 1;
	counter.textContent = result;

	if (result === 1) {
		start = new Date();
		timeStart = start.getTime();
	}

	if (result % 2 !== 0) {
		cookie.width = widthNew;
	} else {
		cookie.width = widthOld;
	}

	if (result > 1) {
		let finish = new Date();
		let timeFinish = finish.getTime();
		let time = (timeFinish - timeStart) / 1000;
		const speed = document.getElementById("clicker__speed");
		speed.textContent = String((result / time).toFixed(2));
	}
}