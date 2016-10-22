//Forgot to time myself, but it was well under an hour. I hope I understood all the questions properly. Let me know thanks!

function billTotal(price) {
	return price + price * (.15 + .095); //Do we have to round up to the nearest cent? return Math.ceil(price*124.5)/100
}

function animalNoise(animal, emotion) {
	if (animal === "dog") {
		if (emotion === "happy") {
			return "WOOF!";
		}
		else if (emotion === "sad") {
			return "*whimper*";
		}
		else {
			return "I only know :) and :("
		}
	}
	else if (animal === "cat") {
		if (emotion === "happy") {
			return "prrrrrr";
		}
		else if (emotion === "sad") {
			return "MEEOOWOWOROWOWWW";
		}
		else {
			return "I only know :) and :("
		}
	}
	else {
		return "Sorry I only can do cat / dog impersonations :3  ^. .^"
	}
}

function digitalSum(n) {
	if (n / 10 < 1) {
		return n;
	}
	return (n % 10) + digitalSum(Math.floor(n/10));
}
