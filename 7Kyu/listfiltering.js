//Description
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//My Solution
function filter_list(l) {
    let filtered = l.filter(num => typeof num === 'number');
    return filtered
  }