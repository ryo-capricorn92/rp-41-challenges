//your code here!
//1. Using your knowledge of JavaScript data types (i.e. numbers, strings, booleans,
//arrays and objects), represent our solar system as data (hint: the link is to a
//Wikipedia article – you should use it). You can include as many attributes as you
//like, but the following are required:

var solarSystem = {
	age: "4.568 billion years",
	distanceFromCenter: "26000 light years",
	knownComets: 3406,
	planets: {
		mercury: {
			name: "Mercury",
			size: "0.055 Earth masses",
			distFromSun: "0.4 AU",
			knownSatellites: "No natural satellites",
		}
		venus: {
			name: "Venus",
			size: "0.815 Earth masses",
			distFromSun: "0.7 AU",
			knownSatellites: "No natural satellites",
		}
		earth: {
			name: "Earth",
			size: "1 Earth mass",
			distFromSun: "1 AU",
			knownSatellites: 1,
		}
		mars: {
			name: "Mars",
			size: "0.107 Earth masses",
			distFromSun: "1.5 AU",
			knownSatellites: 2,
		}
		jupiter: {
			name: "Jupiter",
			size: "318 Earth masses",
			distFromSun: "5.2 AU",
			knownSatellites: 67,
		}
		saturn: {
			name: "Saturn",
			size: "95 Earth masses",
			distFromSun: "9.5 AU",
			knownSatellites: 62,
		}
		uranus: {
			name: "Uranus",
			size: "14 Earth masses",
			distFromSun: "19.2 AU",
			knownSatellites: 27,
		}
		neptune: {
			name: "Neptune",
			size: "17 Earth masses",
			distFromSun: "30.1 AU",
			knownSatellites: 14
		}
	}
}





//2. Complete the below function called range that takes two integers as parameters,
//start and end, and returns an array containing all the whole numbers between them
//starting with start and up to end (you can use a for loop, while loop, each, or
//repetition with function invocation). The function definition should look like
//this:
function range(start, end) {
	var result = start;

	while (start < end) {
		result = start++;
	}
	return result;
}
