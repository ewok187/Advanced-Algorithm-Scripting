function sym(args) {
  var argsArray = [].slice.call(arguments);

  function symDiff(arr1, arr2) {
    var uniqueVals = [];
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) < 0 && uniqueVals.indexOf(arr1[i]) < 0) {
        uniqueVals.push(arr1[i]);
      }
    }

    arr2.forEach(function(item) {
      if (arr1.indexOf(item) < 0 && uniqueVals.indexOf(item) < 0) {
        uniqueVals.push(item);
      }
    });
    return uniqueVals;
  }
  return argsArray.reduce(symDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
