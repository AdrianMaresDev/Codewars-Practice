//Description
/*Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle*/

//My Solution
function findNeedle(haystack) {
    const needle = "needle";
    const index = haystack.indexOf(needle);
    if (haystack.includes(needle)) {
      return `found the needle at position ${index}`;
    }
  }