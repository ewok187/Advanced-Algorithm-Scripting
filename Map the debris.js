function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;


  for (var i = 0; i < arr.length; i++) {
    var orbitalRadius = Math.pow(earthRadius + arr[i].avgAlt, 3);
    var b = Math.sqrt(orbitalRadius / GM);
    var orbPer = Math.round(a * b);
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = orbPer;
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
