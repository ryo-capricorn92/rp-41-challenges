//W2_Challenge Matt Mueller
// 1.
function billTotal (subtotal) {
	var tip = subtotal * 0.15;
	//console.log(tip);
	var tax = subtotal * 0.095;
	//console.log(tax);
	return subtotal + tip + tax;
}

//console.log(billTotal(10));

// 2.
function animalNoise (animal, emotion) {
	if (animal === "cow") {
		if (emotion === "sad") {
			return "Muuuuuuuu...";
		}
		else if (emotion === "impatient") {
			return "Moooooooo!!!";
		}
		else {
			return "bro I can't make a sound for that.";
		}
	}
	else if (animal === "human") {
		if (emotion === "sad") {
			return "I'm sad. waaaahhhhhhh.";
		}
		else if (emotion === "impatient") {
			return "I HAVE PLACES TO BE. GET A MOVE ON, SLOWPOKE!!!";
		}
		else {
			return "I am only either sad or impatient. I wish i wasn't born this way and I better change soon!";
		}
	}
	else {
		return "Try Again. cow or human, sad or impatient.";
	}
}
/*
console.log(animalNoise("cow", "sad"));
console.log(animalNoise("cow", "impatient"));
console.log(animalNoise("cow", "mute"));
console.log(animalNoise("human", "sad"));
console.log(animalNoise("human", "impatient"));
console.log(animalNoise("human", "happy and patient"));
*/


// 3.
function digitalSum(number) {
	number = Math.abs(number);
	if (number % 10 === number) {
		return number;
	}
	return (number % 10) + digitalSum(Math.floor(number/10));
}

/*
console.log(digitalSum(1337));
console.log(digitalSum(1045));
console.log(digitalSum(9));
console.log(digitalSum(-234));
*/
