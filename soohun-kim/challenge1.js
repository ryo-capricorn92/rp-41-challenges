//1.
function billTotal (n) {
	return n + (n * 0.15) + (n * 0.095);
	}

//2.
function animalNoise (animal, emotion) {
	if (animal === "cat" && emotion === "happy") {
		return animal + " eeeeeha!!!";
	}
	else if (animal === "dog" && emotion === "surprised") {
		return animal + " WHHHHAAATTT???";
	}
	else {
		return animal + " nahh.....";
	}
}
animalNoise ("cat", "happy");
animalNoise ("dog", "surpsided");

//3.
function digitalSum (n) {
	if (n === 0) {
		return 0;
	}
	else if (n > 0) {
		return Math.floor (digitalSum (n / 1000)) + () + () + (n % 10)
	}

}

digitalSum (1337); //=> 14
/*
14: 1 + 3 + 3 + 7
Math.floor (1337 / 1000) + (13 %10) + (13 %10) + (1337 % 10);

*/
