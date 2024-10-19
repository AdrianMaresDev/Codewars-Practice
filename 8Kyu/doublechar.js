//Description
/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "*/

//My Solution
function doubleChar(str) {
    let string = "";
    
    for (let char of str) {
      string += char.repeat(2);
    }
    
    return string;
  }