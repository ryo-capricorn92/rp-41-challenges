// challenge 2!

var solarSystem = {
	age: "4.6 billion",
	distance: 27000,
	comets: 3406
}

var planet1 = {
	name: "Mercury",
	size: .055,
	distance: .4
}

var planet2 = {
	name: "Venus",
	size: .815,
	distance: .7
}

var planet3 = {
	name: "Earth",
	size: 0,
	distance: 1
}

var planet4 = {
	name: "Mars",
	size: .107,
	distance: 1.5
}

function range(start, end) {
	var total = 0;
	for (var i = 0; i < start.length; i++) {
		total = start + end[i];
 	}
	return total;
}


var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
	var longest = '';
	var name = people.split('');
	for (var i = 0; i < longest.length; i++) {
		if (name[i] > longest.length) {
			longest = name[i];
		}

	}

longestName(people);
