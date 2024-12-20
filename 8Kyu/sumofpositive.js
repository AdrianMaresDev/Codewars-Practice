//Description
/*You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.*/

//My Solution
function positiveSum(arr) {
    const positiveNums = arr.filter(num => num > 0);
    return positiveNums.reduce((sum, num) => sum + num, 0);
  }