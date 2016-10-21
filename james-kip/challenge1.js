//CHALLENGE

//1.
function billTotal(subtotal) {
  return (subtotal * 1.095) + (subtotal * .15);
}

//2.
function animalNoise(animal, emotion) {
  if (animal === "dinosaur" && emotion === "mad") {
    return "Rawwwrrrrr";
  } else if (animal === "dinosaur" && emmotion === "happy") {
    return "Yawwwwwrrrrr";
  } else if (animal === "dog" && emotion === "mad") {
    return "WOOOOOF";
  } else if (animal === "dog" && emotion === "happy") {
    return "woof! woof!";
  } else return "Get a new pet!"
}

//3.
function digitalSum(n) {
    var result = 0;
    while (n.slice(1) !== '') {
      n = n.slice(1);
      result = n % 10 + n.slice(1)
    }
    return result;
}
