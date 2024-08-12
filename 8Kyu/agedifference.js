//Description
//You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

//My Solution
function differenceInAges(ages){
    const youngest = Math.min(...ages);
    const oldest = Math.max(...ages);
    const difference = oldest - youngest;
    return [youngest, oldest, difference]
  }