/*
EXAMPLE
=======

var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray.map(function(s){return s + 2})) // returns [3,4,5]
console.log(oldArray);  // returns [1, 2, 3]


*/


var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray.map(function(a){
  return a + 3;
});
console.log(newArray)