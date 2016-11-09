//1.
var solarSystem = {
    age: "4.6 billion years",
    distanceFromCenter: "26,000 light-years from the center of the Milky Way.",
    knownComets: "4000",
    planets: [
        {
            name: "Mercury",
            sizeEM:.055 ,
            distanceFromSunAU: .4,
            satellites: 0
        },
            {
            name: "Venus" ,
            sizeEM: .815,
            distanceFromSunAU: .7 ,
            satellites: 0
        },
            {
            name:"Earth" ,
            sizeEM: 1,
            distanceFromSunAU: 1 ,
            satellites: 1
        },
            {
            name:"Mars" ,
            sizeEM: 1.07,
            distanceFromSunAU: 1.5,
            satellites: 2
        },
            {
            name:"Jupiter" ,
            sizeEM: 318,
            distanceFromSunAU: 5.2 ,
            satellites: 67
        },
            {
            name: "Saturn" ,
            sizeEM: 95,
            distanceFromSunAU: 9.5,
            satellites: 62
        },
            {
            name:"Uranus" ,
            sizeEM: 14 ,
            distanceFromSunAU: 19.2 ,
            satellites: 27
        },
            {
            name: "Neptune" ,
            sizeEM: 17,
            distanceFromSunAU: 30.1 ,
            satellites: 14
        }

        ]
};
//2.
function range(start,end){
    var rangeArray = [];
    for(var i = start; i < end; i++){
      if(start < end){
        rangeArray.push(i);
      }
    }
    return rangeArray;
}
range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []
//3.
var people = [
  {
    name:{
    first: "Alyssa",
    middle: "P.",
    last: "Hacker"},
    age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
function fullname(obj){
    var newArr = [];
    for (var i = 0; i < people.length; i++){
        newArr.push(people[i].name.first + people[i].name.last )
    }
    return newArr;
}

var fullNames = fullname(people);
function longest(arr){
    var long = 0;
    var longest = 0;

    for (var i = 0; i < arr.length; i++){
        if(long < arr[i].length){
            long = arr[i].length;
            longest = arr[i];


        }
    }
    return longest
}
longest(fullNames);
