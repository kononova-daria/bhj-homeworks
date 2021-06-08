const numberOfKilled = document.getElementById("dead");
const numberOfMisses = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
	getHole(i).onclick = function () {
		if (getHole(i).className.includes("hole_has-mole") === true) {
			numberOfKilled.textContent = String(Number(numberOfKilled.textContent) + 1);
		} else {
			numberOfMisses.textContent = String(Number(numberOfMisses.textContent) + 1);
		}
		if (numberOfKilled.textContent === "10") {
			alert("Победа!");
			numberOfKilled.textContent = 0;
			numberOfMisses.textContent = 0;
		}
		if (numberOfMisses.textContent === "5") {
			alert("Вы проиграли!");
			numberOfKilled.textContent = 0;
			numberOfMisses.textContent = 0;
		}
	}
}