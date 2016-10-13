
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0; i < arr.length; i++){
    for(var a = 0; a < arr[i].length; a++){
      product = product * arr[i][a];
      //console.log(product)
    }
  }
  // Only change code above this line
  return product;
  // console.log(product);
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
