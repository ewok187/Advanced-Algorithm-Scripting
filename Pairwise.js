function pairwise(arr, arg) {
  var total = 0;
  var checkIndex = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (arr[i] + arr[j] === arg && checkIndex.indexOf(i) == -1 && checkIndex.indexOf(j) == -1) {
        checkIndex.push(i);
        checkIndex.push(j);
        total += i + j;
      }
    }
  } return total;
}
