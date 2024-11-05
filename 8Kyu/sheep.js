//Description
/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  
The correct answer would be 17.*/

//My Solution
function countSheeps(sheep) {
    const presentSheep = sheep.filter (value => value === true).length;
    
    if (presentSheep) {
      return presentSheep;
    } else {
      return 0;
    }
  }