function pairwise(arr, arg) {
  var total = 0;              // create var for sum of indices
  var checkIndex = [];        // create empty arr to push the numbers in it

  for (var i = 0; i < arr.length; i++) {          // loop through the array
    for (var j = i + 1; j < array.length; j++) {  // loop through the array but one index ahead
      if (arr[i] + arr[j] === arg && checkIndex.indexOf(i) == -1 && checkIndex.indexOf(j) == -1) {
        checkIndex.push(i);   // if the sum of two numbers in the array is equal to the arg input and none of them was already used
        checkIndex.push(j);   // push both into the checkIndex array
        total += i + j;       // sum up the indices and return the sum
      }
    }
  } return total;
}
