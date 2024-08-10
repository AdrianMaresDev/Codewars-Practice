//#1 Description
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//My Solution
function evenOrOdd(number) {
    if(number % 2 === 0) {
      return "Even"
    }else{
      return "Odd"
    }
  }


//#2 Description
/*Complete the function which returns the weekday according to the input number:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"*/

//My Solution
function whatday(num) { 
    if(num === 1) {
      return "Sunday"
    }else if(num === 2) {
      return "Monday"
    }else if(num === 3) {
      return "Tuesday"
    }else if(num === 4) {
      return "Wednesday"
    }else if(num === 5) {
      return "Thursday"
    }else if(num === 6) {
      return "Friday"
    }else if(num === 7) {
      return "Saturday"
    }else {
      return "Wrong, please enter a number between 1 and 7"
    }
  }


//#3 Description
//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

//My Solution
  function greet(name){
    return `Hello, ${name} how are you doing today?`
  }


//#4 Description
//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//My Solution
  function problem(x){
    if(typeof x === 'string') {
      return "Error"
    }else{
      return x * 50 + 6
    }
  }


//#5 Description
/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

//My Solution
function bmi(weight, height) {
    let bmi = weight/(height ** 2);
    if(bmi <= 18.5) {
      return "Underweight"
    }else if(bmi <= 25.0) {
      return "Normal"
    }else if(bmi <= 30.0) {
      return "Overweight"
    }else {
      return "Obese"
    }
  }