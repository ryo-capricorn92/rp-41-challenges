// Exercise 1

var tax = 0.095;
var tip = 0.15;

function billTotal(subtotal) {
	return (subtotal * tax) + (subtotal * tip) + subtotal;
}
billTotal(10); // equals 12.45

// 2.

function animalNoise(type, emotion) {
	if (emotion === "sad") {
		return "Why are you so sad," + " " + type + "?";
	}else if (emotion === "scared") {
		return "Don't worry, I'm here with you," + " " + type + "!!!";
	}else if (emotion === "lazy") {
		return "Go take a nap," + " " + type + ".";
	}else {
		return "Same here," + type + ".";
	}
}

// 3.

function digitalSum(n) {
	if (n === 0) {
		return 0;
	}
	return n + ;
}
