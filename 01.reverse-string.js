// 1. Reverse a String
// Task: Write a function that takes a string and returns it reversed.

// Input: string s
// Output: string
// Constraints: s.length <= 1000.
// Edge Case: Single character strings or empty strings.
// Hint: Look into built-in string slicing or a simple loop.

function reverseString(s){
  let output = "";
  for (let index = s.length - 1; index >= 0; index--) {
  output += s[index]
  }
  return output

}

console.log(reverseString("hello"));
