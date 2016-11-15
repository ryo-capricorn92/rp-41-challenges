//1.
function wordLengths(string) {
 var newArr = string.split(" ");
 var result = [];
 each(newArr, function(word){
    result.push(word.length);
 })

 return result;
}
wordLengths("The quick brown fox jumps over the lazy dog")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 3 ]
//2.
function wordLengthsMap(str){
     var newArr = str.split(" ");
     return newArr.map(function(item){
        return item.length;
     });
}
wordLengthsMap("The quick brown fox jumps over the lazy dog");
//3.
function wordsLongerThanThree(str){
    var newArr = str.split(" ");
    return newArr.filter(function(item){
        return item.length > 3;
    })
}
wordsLongerThanThree("The quick brown fox jumps over the lazy dog")
// => [ "quick", "brown", "jumps", "over", "lazy" ]
