//Challenge//

//1.
var solarSystem = {
  age: "4.5 Billion Years",
  distance: "27,000 ± 1,000 ly",
  comets: "4,600",
  planets: {
    name: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune",
    size: .055, .815, 1, .107, 2.5, 95, 14, 17,
    sunDistance: .4, .7, 1, 1.5, 5.2, 9.5, 19.2, 30.1,
    satellite: 0, 0, 1, 2, 67, 62, 27, 14,
  },
};

//2.
function range(start, end) {
  for(i = 0; i <= end; i++) {
    var result = [i];
    var result2 = result.splice(start, end);
    }
    return result2;
}

//3.
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
  var longest = people[0];
  for (i = 1; i < people.length; i++) {
    if (people[i].name.first + people[i].name.middle + people[i].name.last >
       longest) {
         longest = people[i];
       }
  } return longest;
}
