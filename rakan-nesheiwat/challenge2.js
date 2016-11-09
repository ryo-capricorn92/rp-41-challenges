function arrayRange(start, end) {
	var arr = []
	if (end > start) {
      for (var i = start; i < end; i++) {
      	arr.push(i);
      }
	}
	return arr;
}

function longestName(people) {
  var names = [];
  var name = '';
  var nameLength = 0;
  var nameIndex = 0;

  people.forEach(function(item) {
  	for (var key in item.name) {
  	  name += item.name[key];
  	}
  	names.push(name);
  	name = '';
  })

  names.forEach(function(item, index) {
  	if(item.length  > nameLength) {
  	  nameLength = item.length;
  	  nameIndex = index;
  	}
  })
  return people[nameIndex];
}
