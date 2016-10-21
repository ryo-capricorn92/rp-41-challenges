//Number 1
function billTotal(subtotal) {
	var tip = 0;
	var tax = 0;
	var total = 0;
	tip = subtotal * 0.15;
	tax = subtotal * 0.095;
	total = subtotal + tip + tax;
	return "$" +total;
}

billTotal(100); // => $124.5
billTotal(76); //=> $94.62




//Number 2
function animalNoise(animal,emotion) {
	if(animal === 'dog' && emotion === 'happy') {
		return 'WOOF!!!';
	} else if(animal === 'dog' && emotion === 'angry') {
		return 'GRRR!!!';
	} else if(animal === 'cat' && emotion === 'happy') {
		return 'PURR!!!';
	} else if(animal === 'cat' && emotion === 'sad') {
		return 'meow';
	} else {
		return 'It dunno how to feels right now......?????';
	}
}

animalNoise('dog','happy'); //=> WOOF!!!
animalNoise('dog','angry'); //=> GRRR!!!
animalNoise('cat','happy'); //=> PURR!!!
animalNoise('cat','sad');   //=> meow




//Number 3
function digitalSum(number) {
	var digSum = 0;
	var newNumber = 0;
	while(number > 0) {
		newNumber = number % 10;
		digSum += newNumber;
		number = Math.floor(number/10);
	}
	return digSum;
}

digitalSum(1337); // => 14
digitalSum(8); // => 8
