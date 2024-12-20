//Description
/*Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task:
Write a function that returns both the minimum and maximum number of the given list/array.

Remarks:
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.*/

//My Solution
function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return [min, max]
  }