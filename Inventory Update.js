function updateInventory(arr1, arr2) {
  for (var i = 0; i < arr2.length; i++) {             //iterate through each item in the second array
    var foundMatch = false;
    for (var n = 0; n < arr1.length; n++) {           //Does the current item match any existing items? If so, update their quantity
      if (arr1[n][1].indexOf(arr2[i][1]) !== -1) {
        arr1[n][0] += arr2[i][0];
        foundMatch = true;                            //Make foundMatch true so it doesnt add the item later, outside of this iteration
      }
    }
    if (foundMatch === false) {                       //Did iterating through the array turn up a match?
      arr1.push(arr2[i]);                             //if not, create new item
    }
  }

  arr1.sort(function(a, b) {                          //final step, sort everything that is in the array alphabetical
    if (a[1] < b[1]) {
      return -1;
    }
    return 1;
  });
  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
