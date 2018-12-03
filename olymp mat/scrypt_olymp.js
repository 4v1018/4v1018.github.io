
function End() {
	var total = 0;
	var an1 =
	document.getElementById('1a').value;
	var an2 =
	document.getElementById('2a').value;
	var an3 =
	document.getElementById('3a').value;
	var an4 =
	document.getElementById('4a').value;
	var an5 =
	document.getElementById('5a').value;
	var an6 =
	document.getElementById('6a').value;
	var an7 =
	document.getElementById('7a').value;
	if (an1 == "8") {
		total += 1;
	}
	if (an2 == "4") {
		total += 1;
	}
	if (an3 == "15") {
		total += 1;
	}
	if (an4 == "17") {
		total += 1;
	}
	if (an5 == "6") {
		total += 6;
	}
	if (an6 == "4") {
		total += 8;
	}
	if (an7 == "36") {
		total += 2;
	}
	alert("Ваши баллы " + total + " из 20")
}