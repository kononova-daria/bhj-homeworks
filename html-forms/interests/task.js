const sublists = document.getElementsByClassName("interests_active");

for (let i = 0; i < sublists.length; i++) {
	sublists.item(i).closest("li.interest").querySelector(".interest__check").onchange = () => {
		const sublist = sublists.item(i).querySelectorAll(".interest__check");
		for (let i = 0; i < sublist.length; i++) {
			if (sublist.item(i).checked) {
				sublist.item(i).checked = false;
			} else {
				sublist.item(i).checked = true;
			}
		}
	}
}