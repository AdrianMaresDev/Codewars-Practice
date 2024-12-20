//Description
/*Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second. Try not to use if/else statements.

The four operators are "add", "subtract", "divide", "multiply".*/

//My Solution
function arithmetic(a, b, operator){
    const operations = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b
    }
    return operations[operator](a, b)
  }