//Description
//Write a function that checks if a given string (case insensitive) is a palindrome.
//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//My Solution
function isPalindrome(x) {
    const normalized = x.toLowerCase();
    const reversed = normalized.split('').reverse().join('');
    if (normalized === reversed) {
      return true
    } else {
      return false
    }
  }