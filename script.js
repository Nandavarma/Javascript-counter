let count = document.getElementById("counter")
let cnt = 0
let saveel= document.getElementById("entries")
function increment() {
	cnt += 1;
	count.textContent = cnt;
}
function save() {
	if (cnt != 0) {
		saveel.textContent += cnt + " - ";
	}
	cnt = 0;
	count.textContent = cnt;
}



