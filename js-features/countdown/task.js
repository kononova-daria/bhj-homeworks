const timer = document.getElementById("timer");

//function timeReduction () {
//	let seconds = Number(timer.textContent);
//	if (seconds > 0) {
//		timer.textContent = String(seconds - 1);
//	} else {
//		clearInterval(decrease);
//		alert("Вы победили в конкурсе!");
//	}
//}

function timeReduction () {
	let time = timer.textContent.split(":");
	let timeNumber = time.map((item) => Number(item));
	let seconds = timeNumber[0] * 3600 + timeNumber[1] * 60 + timeNumber[2];
	if (seconds > 0) {
		seconds = seconds - 1;
		let newHours = Math.trunc(seconds / 3600);
		let newMinutes = Math.trunc((seconds - (newHours * 3600)) / 60);
		let newSeconds = seconds - (newHours * 3600) - (newMinutes * 60);
		if (newHours < 10) newHours = "0" + newHours;
		if (newMinutes < 10) newMinutes = "0" + newMinutes;
		if (newSeconds < 10) newSeconds = "0" + newSeconds;
		timer.textContent = newHours + ":" + newMinutes + ":" + newSeconds;
	} else {
		clearInterval(decrease);
		alert("Вы победили в конкурсе!");
		location.assign("https://www.google.ru");
	}
}

let decrease = setInterval(timeReduction, 1000);

	
