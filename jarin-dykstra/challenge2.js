// CHALLENGE

// 1.

var ourSolarSystem = {
  ageInBillionsOfYears: 4.568,
  distanceCenterGalaxyInLY: 27000,
  numberKnownComets: 3406,
  theplanets: [
    { name: "Mercury", sizeInEarthMasses: 0.055, distanceFromSunInAU: 0.4, knownSatellites: 0},
    { name: "Venus", sizeInEarthMasses: 0.815, distanceFromSunInAU: 0.7, knownSatellites: 0},
    { name: "Earth", sizeInEarthMasses: 1, distanceFromSunInAU: 1, knownSatellites: 1},
    { name: "Mars", sizeInEarthMasses: .107, distanceFromSunInAU: 1.5, knownSatellites: 2},
    { name: "Jupiter", sizeInEarthMasses: 318, distanceFromSunInAU: 5.2, knownSatellites: 67},
    { name: "Saturn", sizeInEarthMasses: 95, distanceFromSunInAU: 9.5 knownSatellites: 62},
    { name: "Uranus", sizeInEarthMasses: 14, distanceFromSunInAU: 19.2, knownSatellites: 27},
    { name: "Neptune", sizeInEarthMasses: 17, distanceFromSunInAU: 30.1, knownSatellites: 14}
  ]
}

// 2.

function range(start, end) {
  var newArr = [];
  var arrPos = 0;

  if (start <= end) {
    for (i = start; i < end; i++) {
      newArr[arrPos] = i;
      arrPos++;
    }
  }
  return newArr;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// 3.

var people = [
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}
];

function fullName(person) {
  if (person.middle === undefined) {
    return person.first + " " + person.last;
  } else {
    return person.first + " " + person.middle + " " + person.last;
  }
}

function longestName(people) {
  var person = people[0];
  var currentLongest = fullName(people[0].name);
  var challengeLongest = "";

  for (i = 1; i < people.length; i++) {
    challengeLongest = fullName(people[i].name);
    if (currentLongest.length < challengeLongest.length) {
      person = people[i];
      currentLongest = fullName(people[i].name);
    }
  }
  return person;
}

longestName(people);
