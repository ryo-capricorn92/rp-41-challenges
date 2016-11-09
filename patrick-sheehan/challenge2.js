//1 **************************************************************** 1//
var solarSystem = {
	ageInYears: 4568000000,
	lightYearsFromCenterOfGalaxy: 27000,
	numberOfComets: 3406,
	planets: [
		planetGenerator("Mercury", 0.55, 0.4, 0),
		planetGenerator("Venus", 0.815, 0.7, 0),
		planetGenerator("Earth", 1, 1, 1),
		planetGenerator("Mars", 0.107, 1.5, 2),
		planetGenerator("Jupiter", 318, 5.2, 67),
		planetGenerator("Saturn", 95, 9.5, 62),
		planetGenerator("Uranus", 14, 19.2, 27),
		planetGenerator("Neptune", 17, 30.1, 14),
		]
}

function planetGenerator(name, size, distanceFromSunInAU, numberOfSatelites) {
	var planetObj = {
			name: name,
			size: size,
			distanceFromSunInAU: distanceFromSunInAU,
			numberOfSatelites: numberOfSatelites
	}
	return planetObj;
}


//2 **************************************************************** 2//
function range(start, end) {
	var myArray = [];
	for (var i = start; i < end; i++) {
		myArray.push(i);
	}
	return myArray;
}


//3 **************************************************************** 3//
function longestName(people) {
	var longest = people[0];
	for (var i = 0; i < people.length; i++) {
		if (fullName(people[i]).length > fullName(longest).length) {
			longest = people[i];
		}
	}
	return longest;
}

function fullName(person) {
	var fullNameLength = "";
	if (typeof person.name.middle === "undefined") {
		fullNameLength = person.name.first +  person.name.last;
	}
	else {
		fullNameLength = person.name.first + person.name.middle + person.name.last;
	}
	return fullNameLength;
}
