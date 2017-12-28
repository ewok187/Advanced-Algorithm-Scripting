var Person = function(firstAndLast) {
  var fullName = firstAndLast;                              // create variable fullName to store the input


  this.getLastName = function() {                           // create function getLastName
    return fullName.split(" ")[1];                          // that splits the full name at whitespace and returns the last part
  };
  this.getFirstName = function() {                          // create function getFirstName
    return fullName.split(" ")[0];                          // that splits the full name at whitespace and returns the first part
  };
  this.getFullName = function() {                           // create function getFullName that returns the input
    return fullName;
  };
  this.setLastName = function(name) {                       // create function setLastName
    fullName = fullName.split(" ")[0] + " " + name;         // combine the existing first name with the new last name
  };
  this.setFirstName = function(name) {                      // create function setFirstName
    fullName = name + " " + fullName.split(" ")[1];         // combine the new first name with the existing last name
  };
  this.setFullName = function(name) {
    fullName = name;                                        // create function setFullName that assigns the input to the fullName variable
  };
};

var bob = new Person('Bob Ross');
bob.getLastName();
