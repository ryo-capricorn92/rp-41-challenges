//1.
function wordLengths (string) {
	var acc = "";
	var words = string.split("");
	each(string, function (string, key) {
		if (string.length[key] > "") {
			acc.push(words[key].length);
		}
	});
	return acc;
}
wordLengths("one two three");

//2.
function wordLengthsMap (string) {
	var acc = "";
	each (string, function (string.length, key) {
		acc.push(func(string.length, key));
	});
}

//3.
function wordsLongerThanThree (value) {
	return value >= String.length(3);
}
var filtered = ("The callback element is here now").filter(wordsLongerThanThree);
