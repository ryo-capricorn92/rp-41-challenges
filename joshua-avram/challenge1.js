//1.
function billTotal(subtotal) {
	return subtotal + (subtotal * 0.15) + (subtotal * 0.095);
}

OR

function billTotal(subtotal) {
	var tip = subtotal * 0.15
	var tax = subtotal * 0.095

	return subtotal + tip + tax;
}

//2.
function animalNoise(animal,emotion) {
	if (animal === "cat" && emotion === "bored") {
		return "Sigh. Go away human. I have no need of your baffling emotions."}
		else if (animal === "cat" && emotion === "angry") {
			return "RRAOOOAWWWWWWRRR!!!!!!"
		}
		else if (animal === "sloth" && emotion === "lazy") {
			return "Yawn! Delete that exclamation mark. It takes too much energy."
		}
		else if (animal === "sloth" && emotion === "happy") {
			return "ZZZZZZZZZ"
		}
	return "Looks like our " + animal + " is either sleeping or eating. Try another animal in our menagerie!"
}


//3. AND THIS IS AS FAR AS I GOT ON THIS ONE; GOT STUCK TRYING TO FIGURE OUT THE RECURSION FOR IT.
function digitalSum(number) {
var digit = number % 10;

	if (number > 9) {
	return digit
} else if number > 10 {
	return
}
	return Math.floor
}

}
