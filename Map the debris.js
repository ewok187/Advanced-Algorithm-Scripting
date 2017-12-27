function orbitalPeriod(arr) {
  var GM = 398600.4418;           //variable for standard gravitational parameter
  var earthRadius = 6367.4447;    //var for the earth radius
  var a = 2 * Math.PI;            //var for 2 times pi


  for (var i = 0; i < arr.length; i++) {                          //loop through the objects in arr
    var orbitalRadius = Math.pow(earthRadius + arr[i].avgAlt, 3); //var for the orbital radius that needs data from the obj
    var b = Math.sqrt(orbitalRadius / GM);                        //var for the square root of orbital Radius
    var orbPer = Math.round(a * b);                               //var for the orbital Period
    delete arr[i].avgAlt;                                         //deletes the avgAlt Key and property
    arr[i].orbitalPeriod = orbPer;                                //creates new key orbital period in the array and assigns the calculated value
  }

  return arr;
}

orbitalPeriod([{
  name: "iss",
  avgAlt: 413.6
}, {
  name: "hubble",
  avgAlt: 556.7
}, {
  name: "moon",
  avgAlt: 378632.553
}]);
