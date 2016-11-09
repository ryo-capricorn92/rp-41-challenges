var solarSystem = {
    age: "4.6 billion years",
    numberOfComets: 3406,
    distanceFromCenterGalaxy: 5, // ran out of time, made up number
    planet1: {
        name: "Mercury",
        size: 0.055,
        distanceFromSun: 0.4,
        numberSatellites: 0
    }
    planet2: {
        name: "Venus",
        size: 0.815,
        distanceFromSun: 0.7,
        numberSatellites: 0
    }
    planet3: {
        name: "Earth",
        size: 1,
        distanceFromSun: 1,
        numberSatellites: 1
    }
    planet4: {
        name: "Mars",
        size: 0.107,
        distanceFromSun: 1.5,
        numberSatellites: 2
    }
    planet5: {
        name: "Jupiter",
        size: 318,
        distanceFromSun: 5.2,
        numberSatellites: 67
    }
    planet6: {
        name: "Saturn",
        size: 95,
        distanceFromSun: 9.5,
        numberSatellites: 62
    }
    planet7: {
        name: "Uranus",
        size: 14,
        distanceFromSun: 19.2,
        numberSatellites: 27
    }
    planet8: {
        name: "Neptune",
        size: 17,
        distanceFromSun: 30.1,
        numberSatellites: 14
    }
}
function range(start, end) {
  var newArray = [ ];
  while (start < end) {
    newArray = newArray + start;
    start += 1;
  }
  return newArray;
}
range(0, 4);
// this is returning a string of numbers and not a new array - ran out of time
// to figure out how to return [0, 1, 2, 3] instead of "0123"
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
function longestName(people) {
  // write fullName function
    function fullName(person) {
        return people.name.first + ' ' + people.name.middle + ' ' + people.name.last;
    }
  //use fullName.length to determine longest name
  // return longestName = []
  // if fullName1.length > fullName2.length then longestName = fullName1  // figure out how to cycle through and test each


    var = name { };
    for (i = 0; i < people.length; i++) {
        if (fullName[i].length > fullName[i + 1].length) {
            name = fullName[i];
        } else {
            name = fullName[i + 1];
        }
    // this won't let me go through the whole list (only compares the first two)
    // work out how to cycle through these....
    // also, how to deal with no middle name so that it's not undefined?
    }
    return name;
}
