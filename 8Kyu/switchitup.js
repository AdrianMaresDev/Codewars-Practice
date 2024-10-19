//Description
/*When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.
Input: 1
Output: "One".*/

//My Solution
function switchItUp(number){
    const numberStr = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    if (number >= 0 && number <= 9) {
      return numberStr[number]
    }
  }