//Description
/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.*/

//My Solution
function isVow(a) {
    const charCode = [97, 101, 105, 111, 117];
    return a.map(char => {
      if (charCode.includes(char)) {
        return String.fromCharCode(char);
      }
      return char;
    });
  }