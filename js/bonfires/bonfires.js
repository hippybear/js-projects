// SPLIT A STRING AND REVERSE IT

function reverseString(str) {

  // return str;
  return str.split("").reverse().join("");
}

// reverseString("hello");

// FACTORIALIZE A NUMBER

function factorialize(num) {
  var count = 1;
  for(var i = 1; i <= num; i++) {
    count *= i;
  }
  return count;
}

// factorialize(5);

// CHECK FOR PALINDROMES

function palindrome(str) {
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reverseStr;
}

// palindrome("potato");

// CHECK FOR THE LONGEST WORD IN A STRING

function findLongestWord(str) {
  var array = str.split(' ');
  var answer = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i].length > answer){
      answer = array[i].length;
    }
  }
  return answer;
}

// findLongestWord("The quick brown fox");

// Title Case a Sentence

/*
TEST CASES
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
*/
function titleCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

// titleCase("I'm a little tea pot");

// Return Largest Num in an Array
/*
INSTRUCTIONS
============

Return an array consisting of the largest number from each
provided sub-array. For simplicity, the provided array will
contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for
loop, and access each member with array syntax arr[i].

TESTS
=====

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

*/
// setup

function largestOfFour(arr) {
  // You can do this!
  var array = [];
  for ( var n in arr ) {
    var large = 0;
    for ( var i in arr[n] ) {
      if ( arr[n][i] > large ) {
        large = arr[n][i];
      }
    }
    array[n] = large;
  }
  return array;
}

// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*

RULES
=====

Check if a string (first argument, str) ends with the given target
string (second argument, target).

This challenge can be solved with the .endsWith() method, which was
introduced in ES2015. But for the purpose of this challenge, we would
like you to use one of the JavaScript substring methods instead.

TESTS
=====
confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Do not use the built-in method .endsWith() to solve the challenge.

*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str.split(" ")

  // return str
  return str.substr(-target.length) === target
}

/*
confirmEnding("Bastian", "n") // Expect true
confirmEnding("Connor", "n")  // Expect false
confirmEnding("He has to give me a new name", "name") // Expect true
confirmEnding("Open sesame", "same") // Expect true
*/

// REPEAT A STR NUM TIMES

function repeatStringNumTimes(str, num) {
  // repeat after me
  var a = []
  for(var i = 0; i < num; i++){
    a.push( str )
  }
  console.log(a.join(""))
}

// repeatStringNumTimes("abc", 3);

// TRUNCATE A STR

/*
RULES
=====
Truncate a string (first argument) if it is longer than the given
maximum string length (second argument). Return the truncated string
with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal
to 3, then the addition of the three dots does not add to the string
length in determining the truncated string.



TESTS
=====

truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".
*/

function truncateString(str, num) {
  if(num >= str.length){
    // console.log(str)
    return str
  } else if ( ( num - 3 ) < 0 ) {
    var a = str.slice(0, num)
    // console.log( a+"..." )
    return a+"..."
  } else {
    num -= 3
    var a = str.slice(0, num)
    // console.log( a+"..." )
    return a+"..."
  }
}

/*
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("abc", 11);
truncateString("Absolutely Longer", 2)
*/

/*

RULES
====
Write a function that splits an array (first argument) into groups
the length of size (second argument) and returns them as a
two-dimensional array.

TESTS CASES
===========

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]

*/

function chunkArrayInGroups(arr, size) {
  var chunk = [];
  while (arr.length > 0) {
    chunk.push( arr.splice(0,size) )
  }
  return chunk
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);


/*

Return the remaining elements of an array after chopping off n
elements from the head. The head means the beginning of the array,
or the zeroth index.


TEST CASES
==========

slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].

*/


function slasher(arr, howMany) {
  var myArray = [];
  if(howMany > arr.length) {
    // console.log( myArray )
  } else {
    myArray.push( arr.slice(howMany) )
    // console.log( myArray );
  }
}

// slasher(["burgers", "fries", "shake"], 1)
// slasher([1, 2, 3], 0)
// slasher([1, 2, 3], 2);
// slasher([1, 2, 3], 9) // expect []


/*

RULES
======
Return true if the string in the first element of the array
contains all of the letters of the string in the second element
of the array.

For example, ["hello", "Hello"], should return true because all
of the letters in the second string are present in the first,
ignoring case.

The arguments ["hello", "hey"] should return false because the
string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of
the letters in "line" are present in "Alien".

TEST CASES
==========

mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.

*/

function mutation(arr) {
  return arr[1].toLowerCase().split('').every(function(letter) {
    // console.log( arr[0].toLowerCase().indexOf(letter) != -1 )
    return arr[0].toLowerCase().indexOf(letter) != -1
  });
}


mutation(["hello", "hey"]);
mutation(["hello", "Hello"])
mutation(["Mary", "Aarmy"])
mutation(["Alien", "line"])

/*
  RULES
  =====

  You will be provided with an initial array (the first argument in
  the destroyer function), followed by one or more arguments. Remove
  all elements from the initial array that are of the same value as
  these arguments.

  TEST CASES
  ==========

  destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
  destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
  destroyer([2, 3, 2, 3], 2, 3) should return [].
  destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

*/

function destroyer(arr) {
  function isItTho(val){
    console.log( val !== arguments[1] )
  }
  console.log( arr.filter(isItTho) )
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)                 // should return [1, 1]
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)           // should return [1, 5, 1]
// destroyer([3, 5, 1, 2, 2], 2, 3, 5)              // should return [1]
// destroyer([2, 3, 2, 3], 2, 3)                    // should return []
// destroyer(["tree", "hamburger", 53], "tree", 53) // should return ["hamburger"]
