// Self Challenge


// 1.
function billTotal(subtotal) {
  return subtotal + (subtotal * 15)/100 + (subtotal * 9.5)/100;
}

billTotal(100);

// 2.

function animalNoise(animal, emotion) {
  if (animal === "horse" && emotion === "happy") {
    return "Neeeiiiiigggghhh!";
  }
  else if (animal === "horse" && emotion === "sad") {
    return "Neigh I guess...";
  }
  else if (animal === "chicken" && emotion === "excited") {
    return "CLUCK CLUCK CLUCK for real!!!!";
  }
  else if (animal === "chicken" && emotion === "confused") {
    return "Meow???";
  }
  else {
    return "I was tired of typing else if statements, so... " + emotion + " " + animal + " sound";
  }
}

animalNoise("dog", "irate");

// 3.

function digitalSum(n) {
  var result = 0;
  var string = "";
  var total = 0;

  while (n > 0) {
    result = n % 10;
    total = total + n;
    string = string + " + " + n; // I know I need an if statement here to get rid of the extra "+" in result
    n = Math.floor(n / 10);
  }

  return total + ":" + string;

}

digitalSum(1337);
