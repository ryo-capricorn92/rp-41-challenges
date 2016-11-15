// I tried my best, but missed class last Thursday. I tried to work through the practice
// problems over the weekend, but the lecture videos and solutions weren't posted
// and I got stuck. I signed up for office hours to get help.
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 for (var i = 0; i < words.length; i++) {
   acc.push(words[i].length);
 }
 return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 3 ]
// 1.
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 each (string, function(words, i) {
   acc.push(words[i].length);
 });
 return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 3 ]
// Why is this getting stuck reading the length of words[i]?
/// 2.
function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
function wordLengthsMap(string) {
  var acc = [];
  return map(string, func(words) {
    acc.push(func(element, i));
  });

}
wordLengthsMap("The quick brown fox jumps over the lazy dog");
//Just copied from the lesson slide - I don't understand this yet
// 3.
function filter(array, predicate) {
  var result = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      result.push(element);
    }
  });
  return result;
}
function wordsLongerThanThree (string) {
  var result = [];
  if (string[i].length > 3) {
    each (string, function(words, i) {
    result.push(string[i]);
    });
  }
 return result;
}
wordsLongerThanThree("The quick brown fox jumps over the lazy dog")
// => [ "quick", "brown", "jumps", "over", "lazy" ]
