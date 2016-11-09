//W4D1Challenge
  //1.
    var solarSystem = {
      distanceFromCenterOfGalaxyInLightYears: 27000,
      ageInYears: 4568000000,
      numberOfKnownComets: 3406,
      planets: [{
        name: "Mercury",
        sizeInEarthMasses: 0.055,
        distanceFromSunInAstronomicalUnits: 0.4,
        numberOfKnownSatellites: 0
      }, {
        name: "Venus",
        sizeInEarthMasses: 0.815,
        distanceFromSunInAstronomicalUnits: 0.7,
        numberOfKnownSatellites: 0
      }, {
        name: "Earth",
        sizeInEarthMasses: 1,
        distanceFromSunInAstronomicalUnits: 1,
        numberOfKnownSatellites: 1
      }, {
        name: "Mars",
        sizeInEarthMasses: 0.107,
        distanceFromSunInAstronomicalUnits: 1.5,
        numberOfKnownSatellites: 2
      }, {
        name: "Jupiter",
        sizeInEarthMasses: 318,
        distanceFromSunInAstronomicalUnits: 5.2,
        numberOfKnownSatellites: 67
      }, {
        name: "Saturn",
        sizeInEarthMasses: 95,
        distanceFromSunInAstronomicalUnits: 9.5,
        numberOfKnownSatellites: 62
      }, {
        name: "Uranus",
        sizeInEarthMasses: 14,
        distanceFromSunInAstronomicalUnits: 19.2,
        numberOfKnownSatellites: 27
      }, {
        name: "Neptune",
        sizeInEarthMasses: 17,
        distanceFromSunInAstronomicalUnits: 30.1,
        numberOfKnownSatellites: 14
      }]
    };

  //2.
    function range(start, end) {
      var rangeArray = [];
      while (start < end) {
        rangeArray.push(start);
        start++;
      }
      return rangeArray;
    }

    console.log(range(0, 4)); // => [0, 1, 2, 3]
    console.log(range(2, 7)); // => [2, 3, 4, 5, 6]
    console.log(range(10, 10)); // => []
    console.log(range(10, 2)); // => []

  //3.
    var people = [
      {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
      {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
      {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
      {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
      {name: {first: "Louis", last: "Reasoner"}, age: 21}
    ];

    function fullName(personObject){
      var nameString = "";
      for (var string in personObject.name) {
        nameString += personObject.name[string];
      }
      return nameString;
    }

    //console.log(fullName(people[0]).length);

    function longestName(peopleArray) {
      var longestLength = 0;
      var currentLongest = {};
      for (var i = 0; i < peopleArray.length; i++) {
        if (longestLength < fullName(peopleArray[i]).length) {
          longestLength = fullName(peopleArray[i]).length;
          currentLongest = peopleArray[i];
        }
      }
      return currentLongest;
    }

    console.log(longestName(people));
    // => {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}
