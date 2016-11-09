//1.

var ourSolarSystem: {
  age: 4.568 billion years,
  distanceFromGalaxyCenter: 27000 ± 1000 ly,
  knownComets: 3406
},
ourSolarSystem.planet1: {
  name: "Mercury",
  earthMasses: 0.055,
  distanceFromSun: 0.4 AU,
  numberKnownSatellites: 0
},
ourSolarSystem.planet2: {
  name: "Venus",
  earthMasses: 0.815,
  distanceFromSun: 0.7 AU,
  numberKnownSatellites: 0
},
ourSolarSystem.planet3: {
  name: "Earth",
  earthMasses: 1,
  distanceFromSun: 1.0 AU,
  numberKnownSatellites: 1
},
ourSolarSystem.planet4: {
  name: "Mars",
  earthMasses: 0.107,
  distanceFromSun: 1.5 AU,
  numberKnownSatellites: 2
},
ourSolarSystem.planet5: {
  name: "Jupiter",
  earthMasses: 318,
  distanceFromSun: 5.2 AU,
  numberKnownSatellites: 67
},
ourSolarSystem.planet6: {
  name: "Saturn",
  earthMasses: 95.159,
  distanceFromSun: 9.5 AU,
  numberKnownSatellites: 62
},
ourSolarSystem.planet7: {
  name: "Uranus",
  earthMasses: 14,
  distanceFromSun: 19.2 AU,
  numberKnownSatellites: 27
},
ourSolarSystem.planet8: {
  name: "Neptune",
  earthMasses: 17,
  distanceFromSun: 30.1 AU,
  numberKnownSatellites: 14
};



//2.

function range(start,end) {
	var array = []
	if (start >= end) {
		return array;
	} for (var i = start; i < end; i++) {
			array.push(i);
		}
		return array;
};
