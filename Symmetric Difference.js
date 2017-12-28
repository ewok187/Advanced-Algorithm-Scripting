function sym(args) {
  var argsArray = [].slice.call(arguments);  // slice arguments into single array

  function symDiff(arr1, arr2) {             // create callback function for argsArray.reduce
    var uniqueVals = [];                     // create an empty array
    for (var i = 0; i < arr1.length; i++) {  // loop through first array
      if (arr2.indexOf(arr1[i]) < 0 && uniqueVals.indexOf(arr1[i]) < 0) {
        uniqueVals.push(arr1[i]);            // if the number in arr1 is not in arr2 or the uniqueVals array push it to uniqueVals
      }
    }

    arr2.forEach(function(item) {            // loop through each number in arr2
      if (arr1.indexOf(item) < 0 && uniqueVals.indexOf(item) < 0) {
        uniqueVals.push(item);               // if the number is not in arr1 nor uniqueVals push it to uniqueVals
      }
    });
    return uniqueVals;
  }
  return argsArray.reduce(symDiff);          // return the symmetric difference of argsArray
}

sym([1, 2, 3], [5, 2, 1, 4]);
