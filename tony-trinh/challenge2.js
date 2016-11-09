//======#1=====
var solarSystem = {
	age: 4568000000,
	distanceToCenter: 27000,
	numberOfComets: 3406,
	planets: {
		mercury: {
		  name: "Mercury",
		  size: 0.055,
		  distanceFromSun: 0.4,
		  numberOfSatellites: 0
	     },
	    venus: {
		  name: "Venus",
		  size: 0.815,
		  distanceFromSun: 0.7,
		  numberOfSatellites: 0
	     },
	    earth: {
		  name: "Earth",
		  size: 1,
		  distanceFromSun: 1,
		  numberOfSatellites: 1
	     },
	    mars: {
		  name: "Mars",
		  size: 0.107,
		  distanceFromSun: 1.5,
		  numberOfSatellites: 2
	     },
	    jupiter: {
		  name: "Jupiter",
		  size: 318,
		  distanceFromSun: 5.2,
		  numberOfSatellites: 67
	     },
	    saturn: {
		  name: "Saturn",
		  size: 95,
		  distanceFromSun: 9.5,
		  numberOfSatellites: 62
	     },
	    uranus: {
		  name: "Uranus",
		  size: 14,
		  distanceFromSun: 19.2,
		  numberOfSatellites: 27
	     },
	    neptune: {
		  name: "Neptune",
		  size: 17,
		  distanceFromSun: 30.1,
		  numberOfSatellites: 14
	     }
	 }
};

//=====#2======
function range (start,end) {
  var arr = [];
  for (i = start; i < end; i++) {
  	arr.push(i);
  }
  return arr;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []


//=====#3=====
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function fullName (people) {
  fullNameArray = [];
  for (i = 0; i < people.length; i++) {
  	if (people[i].name.middle) {
  	  fullNameArray[i] = (people[i].name.first + " " + people[i].name.middle + " " + people[i].name.last).length;
    } else {
  	  fullNameArray[i] = (people[i].name.first + " " + people[i].name.last).length;
    }
  }
  return fullNameArray;
}
fullName(people);

function longestName(people) {
	var longest = fullNameArray[0];
	var index = 0;
	for (i = 0; i < fullNameArray.length; i++) {
		if(fullNameArray[i] > longest) {
			index = i;
		}
	}
	return people[index];
}
longestName(people);
// => {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}
