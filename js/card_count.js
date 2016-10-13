/*

You will write a card counting function.
It will receive a card parameter and increment
or decrement the global count variable according
to the card's value (see table). The function will
then return a string with the current count and the
string "Bet" if the count is positive, or "Hold" if
the count is zero or negative. The current count and
the player's decision ("Bet" or "Hold") should be
separated by a single space.

Example Output
"-3 Hold"
"5 Bet"

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.


Count Change	Cards
+1 | 2, 3, 4, 5, 6
 0 | 7, 8, 9
-1 | 10, 'J', 'Q', 'K', 'A'

*/

var count = 0;

function cc(card) {
  var choice = "";
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;

  }

  if(count > 0){
    choice = count + " Bet";
  } else if(count <= 0){
    choice = count + " Hold";
  }
  console.log(choice);
  // return choice;


}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
