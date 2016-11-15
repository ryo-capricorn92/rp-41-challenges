1.
function wordLengths(string) {
	var acc = [];
	var words = string.split(' ');
	words.forEach(function(item){acc.push(item.length)});
	return acc;
}

2.
function wordLengths(string) {
	var acc = [];
	var words = string.split(' ');
	acc = words.map(function(item){return item.length});
	return acc;
}
3.
function wordLengths(string) {
	var acc = [];
	var words = string.split(' ');
	acc = words.filter(function(item){return item.length > 3});
	return acc;
}
