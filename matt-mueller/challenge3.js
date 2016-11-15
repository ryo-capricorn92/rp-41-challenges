//W5D1_Challenge
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

    function map(array, func) {
      var acc = [];
      each(array, function(element, i) {
        acc.push(func(element, i));
      });
      return acc;
    }
	//1.
    /* Original Function
      function wordLengths(string) {
        var acc = [];
        var words = string.split(" ");
        for (var i = 0; i < words.length; i++) {
          acc.push(words[i].length);
        }
        return acc;
      }
    */

    //New:
      function wordLengths(string) {
        var acc = [];
        var words = string.split(" ");
        each(words, function(x) {
          acc.push(x.length);
        });
        return acc;
      }
      console.log(wordLengths("The quick brown fox jumps over the lazy dog"));
      // => [ 3, 5, 5, 3, 5, 4, 3, 4, 3 ]

  //2.
    function wordLengthsMap(string) {
      var words = string.split(" ");
      return map(words, function(x) {
        return x.length;
      });
    }
    console.log(wordLengthsMap("The quick brown fox jumps over the lazy dog"));

  //3.
    //Filter (as requested)
    function wordsLongerThanThree(string) {
      var words = string.split(" ");
      return filter(words, function(x) {
        return (x.length > 3);
      });
    }

    console.log(wordsLongerThanThree("The quick brown fox jumps over the lazy dog"));

/*
    //Each
    function wordsLongerThanThreeEach(string) {
      var acc = [];
      var words = string.split(" ");
      each(words, function(x) {
        if (x.length > 3) {
          acc.push(x);
        }
      });
      return acc;
    }

    console.log(wordsLongerThanThreeEach("The quick brown fox jumps over the lazy dog"));
    // => [ "quick", "brown", "jumps", "over", "lazy" ]

    //each w/ splice
    function wordsLongerThanThreeSplice(string) {
      var words = string.split(" ");
      each(words, function(x, y) {
        if (x.length <= 3) {
          words.splice(y, 1);
        }
      });
      return words;
    }

    console.log(wordsLongerThanThreeSplice("The quick brown fox jumps over the lazy dog"));
*/
