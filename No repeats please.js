function permAlone(str) {
  var arr = str.split("");      // split str into array of the letters
  var result = 0;               // create result variable

  function swap(a,b) {          // create function swap thats swaps the letters on call
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function generate(n) {        // create function generate with argument n
    var regex = /([a-z])\1+/;   // create regexp that looks for 1 letter 2 times in a row

    if(n === 1 && !regex.test(arr.join(""))) {  // if the argument is 1 and there is no letter 2times in a row
      result++;                                 // add 1 to result
    } else {
      for(var i = 0; i !== n; i++) {            // else swap the letters around and try again
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }
  generate(arr.length);
  return result;
}

permAlone('aab');
