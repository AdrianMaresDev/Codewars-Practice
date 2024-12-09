//Description
//Write a function that returns a string in which firstname is swapped with last name.

//Example(Input --> Output)

//"john McClane" --> "McClane john"

//My Solution
function nameShuffler(str){
    const names = str.split(' ');
    return names.reverse().join(' ')
  }