//Description
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//You can assume that all values are integers. Do not mutate the input array.

//My Solution
function invert(array) {
    let reverse = array.map(num => num * -1); 
    return reverse;
  }