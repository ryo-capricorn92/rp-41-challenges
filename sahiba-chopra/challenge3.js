//1.
function wordLengths(string) {
  var acc = [];
  var words = string.split(" ");
  each(words, function(word) {
    acc.push(word.length);
  });
  return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 3 ]
// 2.
function wordLengths(string) {
 var words = string.split(" ");
 return map(words, function(word) {
  return word.length;
 });
}
wordLengths("The quick brown fox jumps over the lazy dog")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 3 ]
// 3.
function greater(x) {
  return function(word) {
    return word.length > x;
  }
}
function wordsLongerThanThree(string) {
  var words = string.split(" ");
  return filter(words, greater(3));
}
wordsLongerThanThree("The quick brown fox jumps over the lazy dog")
// => [ "quick", "brown", "jumps", "over", "lazy" ]
