// Self Challenge

// Exercises

// 1.

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 each(words, function(x) {
   acc.push(x.length);
 });
 return acc;
}

wordLengths("The quick brown fox jumps over the lazy dog")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 3 ]

// 2.

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function wordLengthsMap(string) {
  var words = string.split(" ");
  return map(words, function(x) {
    return x.length;
  });
}

wordLengthsMap("The quick brown fox jumps over the lazy dog")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 3 ]

// 3.

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function wordLongerThanThree(string) {
  var words = string.split(" ");
  return filter(words, function(x) {
    return x.length > 3;
  });
}

wordLongerThanThree("The quick brown fox jumps over the lazy dog")
// => ["quick", "brown", "jumps", "over", "lazy"]
